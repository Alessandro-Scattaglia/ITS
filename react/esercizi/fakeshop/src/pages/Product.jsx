import { useParams, useLocation } from "react-router-dom"

export default function Product() {
  const {id} = useParams();
  const location = useLocation();
  console.log("Location", location);
  
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Dettagli del prodotto</h1>
      <p className="text-lg">Stai vedendo i dettagli dell' ID: {id}</p>
    </>

  )
}
