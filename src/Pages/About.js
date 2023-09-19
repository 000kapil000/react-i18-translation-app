import React from 'react'
import { useTranslation } from "react-i18next";
const About = () => {
    const { t } =useTranslation(["about"]) 
  return (
    <div className='container mt-3'>
        <h3 className='text-center'>{t("Read this to know more about us")} </h3>
     
    <div className=' d-flex mt-5 row-12 text-center'>
     <div className=' col-md-6 mt-5'>
        <h5>{t("what we are")} </h5>
        <p>
        {t("Education systems are complex social systems. As a result, it is important that any educational policy reform recognize the complexity of implementation and change and respond accordingly. It is equally important to recognize that complex education systems contain a multitude of purposes and values that are not necessarily aligned")}.
        </p>
     </div>
     <div className='col-md-6 mt-5'>
        <h5>{t("what we do")}</h5>
        <p>{t("Education systems around the world have been subject to patterns of reform that speak to the influence of neoliberalism. Drawing on the wider theoretical debates concerning the nature of neoliberalism and neoliberalization can help in tracing the extent and evolution of educational reform, both nationally and globally.")}</p>
     </div>

    </div>
    </div>
  )
}

export default About