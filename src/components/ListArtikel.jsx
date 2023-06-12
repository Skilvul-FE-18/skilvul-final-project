import { useDispatch, useSelector } from "react-redux";
import "../assets/css/Artikel.css";
import imgHiglight from "../assets/img/imageCard.png";
import CardArtikel from "./CardArtikel";
import { useEffect } from "react";
import { getArtikel } from "../redux/reducer/artikelReducer";
import HighlightArtikel from "./HighlightArtikel";

function ListArtikel() {

    const dispatch = useDispatch()
    const {artikel, isLoading} = useSelector((state) => state.artikel)
    // console.log(artikel)

  const loading = useSelector((state) => state.artikel)
  console.log(loading)

//buatlah fungsi yang mencari artikel yang memiliki property is_highlighted true
//simpan artikel tersebut ke dalam variabel higlightedArtikel
//tampilkan komponen HighlightArtikel dengan props yang dibutuhkan
  const higlightedArtikel = artikel.find((item) => item.categorihg === 'true')
  console.log(higlightedArtikel)

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
          
                {
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
                }
        </div>
    </div>
    </>
  )
}

export default ListArtikel