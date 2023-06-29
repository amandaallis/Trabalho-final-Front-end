 /* eslint-disable */
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Spinner } from '@chakra-ui/react'
import "./ItemsModal.css"
import CardComponent from "./CardComponent";
import ReactPaginate from "react-paginate";

const ItemsModal = () => {
  const [useData, setUseData] = useState([])
  const [loading, setLoading] = useState(false)
  const [pageNumber, setPageNumber] = useState(0)

  const dataPerPage = 8;
  const pagesVisited = pageNumber * dataPerPage
  
  const displayData = useData.slice(pagesVisited, pagesVisited + dataPerPage).map((person) => {
    const limitedText = person.about.substring(0, 80)

    return (
      <div className="cardWrapper">
        <CardComponent
          className="cardComponent"
          propText={person.name_kanji}
          propText={limitedText}
          propImage={person.images.jpg.image_url}
          propName={person.name} />

      </div>
    )
  })

  const fetchuseData = useCallback(async () => {
    try {
      setLoading(true)
      const { data } = await axios.get("https://api.jikan.moe/v4/characters")
      setUseData(data.data)
    } catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false)
    }
  })
  //  {imagem && <img src={imagem} alt="Imagem do gato" />}

  const renderData = () => {
    if (loading) {
      return (
        <div>
          <Spinner color="black" />
        </div>
      )
    }

    return (
      <div className="container">
        {displayData}
      </div>
    )
  }

  useEffect(() => {
    fetchuseData()
  }, [])

  const pageCount = Math.ceil(useData.length /dataPerPage )
  const changePage = ({selected}) => {
    setPageNumber(selected)
  }
  return (
    <div className="container">
      {renderData()}
    
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttn"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activedClassNeme={"paginationActive"}
      />
    </div>
  );
}

export default ItemsModal;