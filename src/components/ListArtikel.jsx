import { useDispatch, useSelector } from "react-redux";
import "../assets/css/Artikel.css";
import imgHiglight from "../assets/img/imageCard.png";
import CardArtikel from "./CardArtikel";
import { useEffect } from "react";
import { filterCategory, getArtikel } from "../redux/reducer/artikelReducer";
import HighlightArtikel from "./HighlightArtikel";
import FilterArtikel from "./FilterArtikel";

function ListArtikel() {

    const dispatch = useDispatch()
    const {artikel, isLoading,filterCategory} = useSelector((state) => state.artikel)

    const loading = useSelector((state) => state.artikel)
    const higlightedArtikel = artikel.find((item) => item.categorihg === 'true')

  //  const filteredCategory = artikel.filter((item) => item.categori === 'bullying')
  // console.log(filteredCategory)

  const filteredCategory = artikel.filter((item) => {
    if (filterCategory === 'all') {
      return true
    }else {
      return item.categori === filterCategory
    }
  })
  console.log(filteredCategory)

  useEffect(()=> {
    dispatch(getArtikel())
  },[])

  if(loading.isLoading){
    return(
      <p>Loading articles. . . </p>
    )
  }


  return (
    <>
    <FilterArtikel
    
    />

    {
      higlightedArtikel && (
        <HighlightArtikel
        imgHg={higlightedArtikel.image_source}
        categori={higlightedArtikel.categori}
        date={higlightedArtikel.createdAt}
        title={higlightedArtikel.title}
        excerpt={higlightedArtikel.excerpt}

        />
      )
    }
    <div className="container">
        <div className="row">
            <h3>Artikel Terbaru</h3>
          
                {/* {
                    artikel.map((item) => (
                        <div className="col-md-4" key={item.id}>

                        <CardArtikel
                         img={item.image_source}
                         kategori={item.categori}
                          date={item.createdAt}
                          tittle={item.title}
                          excerpt={item.excerpt}
                        />
                        </div>
                    ))
                } */}
             {
              filteredCategory.map((item) => (
                <div className="col-md-4" key={item.id}>
                   <CardArtikel
                         img={item.image_source}
                         kategori={item.categori}
                          date={item.createdAt}
                          tittle={item.title}
                          excerpt={item.excerpt}
                        />
                </div>
              ))
            } 

        </div>
    </div>
    </>
  )
}

export default ListArtikel