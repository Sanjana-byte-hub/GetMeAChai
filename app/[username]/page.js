import React from "react";
import PaymentPage from "../components/PaymentPage";

export default function Page({ params }) {
  const username = params.username;

  return (
    <>
      <PaymentPage username={username} />
    </>
  );
}
export async function generateMetadata({params}){
  return{
    title:`Support ${params.username}-Get Me A Chai`,
  }
}
