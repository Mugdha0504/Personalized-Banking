import React, {useReducer} from "react";
import axios from "axios";
import Admin from "layouts/Admin.js";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value
  }

}

export default function Retention() {
  const [formData, setFormData] = useReducer(formReducer, {})

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    // axios.post('http://localhost:3000/api', formData).then(res => {
    //   console.log(res)
    //   return res;
    // });
  }

  useEffect(() => {
    setLoading(true);
    // axios Request for getting className, adminName, adminEmail, year, subject
    const accountId = formData.accountId
    axios.get("http://localhost:3000/api", params= {accountId})
      .then((res)=>{
        return res;
      })
      .catch(err => {
        console.log(err.response);
      })
      
  }, []);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Retention Risk Analysis</h6>
            
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={handleSubmit}>
          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  User Information
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Account ID
                      </label>
                      <input
                        type="text"
                        onChange={setFormData}
                        name="accountId"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="BANK-XXXX"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        onChange={setFormData}
                        name="phoneNumber"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="+91 "
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        onChange={setFormData}
                        name="userName"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="lucky.jesse"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        onChange={setFormData}
                        name="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="jesse@example.com"
                      />
                    </div>
                  </div>
                </div>
            <br/>
            <button
              className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            >
              Generate Score
            </button>
          </form>
        </div>
      </div>
        </div>
      </div>
    </>
  );
}

Retention.layout = Admin;
