import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateArtikel } from '../redux/reducer/artikelReducer';

function UpdateFormArtikelAdmin({onSubmit}) {
    const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { artikel } = useSelector((state) => state.artikel);
    const [formData, setFormData] = useState({
        categori: '',
        createdAt: '',
        title: '',
        image: '',
        description: ''
        });

        const handleChange = (e) => {
            setFormData((prevData) => ({
              ...prevData,
              [e.target.name]: e.target.value,
            }));
          };
          const handleSubmit = () => {
            dispatch(updateArtikel(id, formData));
            navigate("/admin/artikel");
          };

          useEffect(() => {
            const currentArtikel = artikel.find((item) => item.id === id);
            if (currentArtikel) {
              setFormData({
                title: currentArtikel.title,
                description: currentArtikel.description,
                category: currentArtikel.category,
              });
            }
          }, [artikel, id]);


  return (
    <div className="row">
    <div className="col-md-6">
      <div className="form-group">
        <label>Kategori</label>
        <input
          type="text"
          className="form-control mt-2"
          id="categori"
          name="categori"
          value={formData.categori}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Date</label>
        <input
          type="text"
          className="form-control mt-2"
          id="createdAt"
            name="createdAt"
            value={formData.createdAt}
            onChange={handleChange}
        />
      </div>
    </div>
    <div className="col-md-6">
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          className="form-control mt-2"
          id="title"
            placeholder="masukkan title"
            name="title"
            value={formData.title}
            onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Image</label>
        <input
          type="text"
          className="form-control mt-2"
          id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
          placeholder="masukkan url image"
        />
      </div>
    </div>
    <div className="form-group mt-3">
      <label>Description</label>
      <div className="form-floating ">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          style={{ height: "100px" }}
        ></textarea>
      </div>
    </div>
    <div className="row mt-3">
      <div className="col-md-12">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Update
        </button>
      </div>
    </div>
  </div>
  )
}

export default UpdateFormArtikelAdmin