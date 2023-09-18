import React,{useEffect,useState} from 'react'
import { useTranslation } from 'react-i18next'
import axios from 'axios';
import PhotoCard from '../components/PhotoCard';

const Home = () => {
    const {t}=useTranslation(["home"]);


    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
  
    useEffect(() => {
      const fetchPhotos = async () => {
        try {
          const response = await axios.get(
            `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=12`
          );
          setPhotos((prevPhotos) => [...prevPhotos, ...response.data]);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching photos:", error);
        }
      };
  
      fetchPhotos();
    }, [page]);


    const loadMorePhotos = () => {
      setPage(page + 1);
    };

  return (
    <div className='container mt-5'>
        <h1 className='text-center'>
            {t("home")}
        </h1>
        <div className="container">
      <div className="row">
        {photos.map((photo) => (
         <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
      {loading && <p>Loading...</p>}
      {!loading && (
        <button className="btn btn-primary" onClick={loadMorePhotos}>
          {t("Load More")}
        </button>
      )}
    </div>

    </div>
  )
}

export default Home