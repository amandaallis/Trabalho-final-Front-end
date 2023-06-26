import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Spinner } from '@chakra-ui/react'
import "./ItemsModal.css"
import CardComponent from "./CardComponent";

const ItemsModal = () => {
  const [useData, setUseData] = useState([])
  let [loading, setLoading] = useState(false)

  const fetchuseData = useCallback(async () => {
    try {
      setLoading(true)
      const {data} = await axios.get("https://api.jikan.moe/v4/characters")
      setUseData(data.data)
    } catch (error) {
      console.log(error)
    }
    finally{
      setLoading(false)
    }
  })
//  {imagem && <img src={imagem} alt="Imagem do gato" />}

const renderData = () => {
   if (loading) {
        return (
          <div>
            <Spinner/>
          </div>
        )
    }

    return (
      <div className="container">
        {useData.map((person) => {
          const limitedText = person.about.substring(0, 80)
          return (
            <div className="cardWrapper">
            <CardComponent 
              className = "cardComponent"
              propText={person.name_kanji} 
              propText={limitedText}
              propImage={person.images.jpg.image_url} 
              propName={person.name}/>

            </div>
          )
            })
          }  
        </div>
    ) 
}

  useEffect(()=> {
    fetchuseData()
  }, [])

  return (
    <div className="container">
        {renderData()}
    </div>
  );
}

export default ItemsModal;