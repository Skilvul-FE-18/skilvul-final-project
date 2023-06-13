
import DisclaimerArtikel from '../components/DisclaimerArtikel';
import FilterArtikel from '../components/FilterArtikel';
import HighlightArtikel from '../components/HighlightArtikel';
import JumbotronArtikel from '../components/JumbotronArtikel';
import ListArtikel from '../components/ListArtikel';
import MainLayout from './../layout/MainLayout';

function Artikel() {
  return (
    <section className="Artikel" style={{
        backgroundColor: '#F4F7F9',
    }}>

    <MainLayout>
       <JumbotronArtikel/>
       {/* <FilterArtikel   /> */}
       {/* <HighlightArtikel/> */}
       <ListArtikel/>
       <DisclaimerArtikel/>
    </MainLayout>
    </section>
  )
}

export default Artikel