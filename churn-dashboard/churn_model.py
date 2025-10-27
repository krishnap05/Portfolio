"""Churn model training, evaluation and SHAP explanation.

This script loads the Telco Customer Churn dataset (CSV), preprocesses it,
trains an XGBoost classifier, evaluates it, and produces a SHAP summary plot.

Usage:
 - Put the dataset at data/WA_Fn-UseC_-Telco-Customer-Churn.csv (or pass a path)
 - Run: python churn_model.py

Notes:
 - SHAP explanation runs after model training.
 - The script saves the trained model and a SHAP summary image.
"""

import os
import sys
import warnings
import joblib
import shap
import pandas as pd
from sklearn.model_selection import train_test_split
from xgboost import XGBClassifier
from sklearn.metrics import classification_report, confusion_matrix
import matplotlib.pyplot as plt


def load_and_prepare(csv_path: str):
	if not os.path.exists(csv_path):
		raise FileNotFoundError(f"Dataset not found: {csv_path}")

	df = pd.read_csv(csv_path)

	# Convert TotalCharges to numeric (some rows may be empty strings)
	if 'TotalCharges' in df.columns:
		df['TotalCharges'] = pd.to_numeric(df['TotalCharges'], errors='coerce')

	# Drop rows with missing target or critical numeric
	if 'Churn' in df.columns:
		df = df.dropna(subset=['Churn'])
	if 'TotalCharges' in df.columns:
		df = df.dropna(subset=['TotalCharges'])

	# Map target to binary 0/1 explicitly
	if 'Churn' in df.columns:
		df['Churn'] = df['Churn'].map({'No': 0, 'Yes': 1})
	else:
		raise KeyError("Expected a 'Churn' column in the dataset")

	# One-hot encode categorical features (exclude the target)
	X = pd.get_dummies(df.drop(columns=['Churn']), drop_first=True)
	y = df['Churn']
	return X, y


def train_and_evaluate(X, y, random_state: int = 42):
	X_train, X_test, y_train, y_test = train_test_split(
		X, y, test_size=0.2, random_state=random_state, stratify=y
	)

	model = XGBClassifier(use_label_encoder=False, eval_metric='logloss')
	model.fit(X_train, y_train)

	y_pred = model.predict(X_test)

	print("Confusion matrix:")
	print(confusion_matrix(y_test, y_pred))
	print("\nClassification report:")
	print(classification_report(y_test, y_pred))

	# Feature importance (top 10)
	try:
		importances = pd.Series(model.feature_importances_, index=X.columns)
		top10 = importances.nlargest(10)
		ax = top10.plot(kind='barh', title='Top 10 Important Features')
		plt.tight_layout()
		plt.savefig('feature_importance_top10.png', dpi=150)
		plt.close()
	except Exception:
		warnings.warn('Could not generate feature importance plot')

	return model, X_train, X_test, y_train, y_test


def explain_with_shap(model, X_train, X_test, out_path='shap_summary.png'):
	# Use TreeExplainer for tree models; fallback to generic Explainer
	try:
		explainer = shap.TreeExplainer(model)
		# shap_values may be a list for multiclass models; handle accordingly
		shap_values = explainer.shap_values(X_test)
	except Exception:
		try:
			explainer = shap.Explainer(model, X_train)
			shap_vals_obj = explainer(X_test)
			shap_values = shap_vals_obj.values if hasattr(shap_vals_obj, 'values') else shap_vals_obj
		except Exception as e:
			warnings.warn(f"SHAP explanation failed: {e}")
			return

	# summary_plot has different signatures depending on API; try both
	try:
		shap.summary_plot(shap_values, X_test, show=False)
		plt.tight_layout()
		plt.savefig(out_path, dpi=150)
		plt.close()
	except Exception:
		try:
			shap.summary_plot(shap_values, X_test)
		except Exception as e:
			warnings.warn(f"Failed to create SHAP summary plot: {e}")


def main(csv_path='data/WA_Fn-UseC_-Telco-Customer-Churn.csv'):
	print(f"Loading dataset from: {csv_path}")
	X, y = load_and_prepare(csv_path)
	model, X_train, X_test, y_train, y_test = train_and_evaluate(X, y)

	# Save model for later reuse
	try:
		joblib.dump(model, 'xgb_churn_model.joblib')
		print('Model saved to xgb_churn_model.joblib')
	except Exception:
		warnings.warn('Could not save model to disk')

	# SHAP explanation (after training)
	explain_with_shap(model, X_train, X_test)


if __name__ == '__main__':
	# Allow passing a dataset path as the first CLI argument
	dataset = sys.argv[1] if len(sys.argv) > 1 else 'data/WA_Fn-UseC_-Telco-Customer-Churn.csv'
	try:
		main(dataset)
	except Exception as e:
		print(f"Error: {e}")
		raise