import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt
from xgboost import XGBClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, confusion_matrix

# Title
st.title("Customer Churn Prediction Dashboard")

# Load data
df = pd.read_csv('data/WA_Fn-UseC_-Telco-Customer-Churn.csv')
df['TotalCharges'] = pd.to_numeric(df['TotalCharges'], errors='coerce')
df.dropna(subset=['TotalCharges'], inplace=True)
df.drop(['customerID'], axis=1, inplace=True)
df = pd.get_dummies(df, drop_first=True)

# Split data
X = df.drop('Churn_Yes', axis=1)
y = df['Churn_Yes']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
model = XGBClassifier(use_label_encoder=False, eval_metric='logloss')
model.fit(X_train, y_train)
y_pred = model.predict(X_test)

# Show metrics
st.subheader("Model Performance")
st.text("Confusion Matrix:")
st.write(confusion_matrix(y_test, y_pred))
st.text("Classification Report:")
st.text(classification_report(y_test, y_pred))

# Feature importance
st.subheader("Top Features Driving Churn")
importance = pd.Series(model.feature_importances_, index=X.columns).nlargest(10)
fig, ax = plt.subplots()
importance.plot(kind='barh', ax=ax)
st.pyplot(fig)