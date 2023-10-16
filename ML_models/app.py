import uvicorn
from fastapi import FastAPI
from pydantic import BaseModel
import json
import pickle
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


class churn_model(BaseModel):
    CreditScore: int
    Age: int
    Tenure :int
    Balance: float
    NumOfProducts : int
    HasCrCard: bool
    IsActiveMembar: bool
    EstimatedSalary: float
    Gender_Male: bool

class credit_model(BaseModel):
    gender: bool
    car: bool
    property:bool
    children:int
    annual_income: float
    income_type: str
    education: str
    family_status: str
    housing_type: str
    work_phone : bool
    phone:bool
    email:bool
    occupation_type : str
    fam_members:int
    age: int
    year_of_employment: int

origins = [
    "http://localhost",
    "http://localhost:8000"
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

with open('ML_models/churn_model.pkl', 'rb') as handle:
   churn_model_load = pickle.load(handle)

# -------------------------Churn Model-------------------------------
@app.get('/churn_score')
def churn_predict(input_parameters: churn_model): 
    print(input_parameters)
    input_data_churn = input_parameters.json()
    input_dictionary_churn = json.loads(input_data_churn)

    creditScore= input_dictionary_churn['CreditScore']
    age= input_dictionary_churn['Age']
    tenure= input_dictionary_churn['Tenure']
    balance= input_dictionary_churn['Balance']
    numOfProducts = input_dictionary_churn['NumOfProducts']
    hasCrCard= input_dictionary_churn['HasCrCard']
    isActiveMembar= input_dictionary_churn['IsActiveMembar']
    estimatedSalary= input_dictionary_churn['EstimatedSalary']
    genderMale= input_dictionary_churn['Gender_Male']

    input_list_churn = [creditScore,age,tenure,balance,numOfProducts,hasCrCard,isActiveMembar,estimatedSalary,genderMale]
    
    prediction = churn_model_load.predict([input_list_churn])

    if prediction[0]==0:
        return 'true'
    else: 
        return 'false'


if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=8000)


# with open('ML models/creditRiskModel.pkl', 'rb') as handle:
#    credit_model_load = pickle.load(handle)

# # ------------------credit score------------------------
# @app.get('/credit_score')
# def credit_predict(input_parameters: credit_model): 
#     print(input_parameters)
#     input_data = input_parameters.json()
#     input_dictionary_credit = json.loads(input_data)

#     gender = input_dictionary_credit['gender']
#     car = input_dictionary_credit['car']
#     property = input_dictionary_credit['property']
#     children = input_dictionary_credit['children']
#     annual_income = input_dictionary_credit['annual_income']
#     income_type = input_dictionary_credit['income_type']
#     education = input_dictionary_credit['education']
#     family_status = input_dictionary_credit['family_status']
#     housing_type= input_dictionary_credit['housing_type']
#     work_phone = input_dictionary_credit['work_phone']
#     phone = input_dictionary_credit['phone']
#     email = input_dictionary_credit['email']
#     occupation_type = input_dictionary_credit['occupation_type']
#     fam_members = input_dictionary_credit['fam_members']
#     age = input_dictionary_credit['age']
#     year_of_employment= input_dictionary_credit['year_of_employment']

#     input_list_churn = [gender,car,property,children,annual_income,income_type,education,family_status,housing_type,work_phone,phone,email ,
#                   occupation_type,fam_members, age ,year_of_employment]
    
#     prediction = credit_model_load.predict([input_list_churn])

#     return prediction
