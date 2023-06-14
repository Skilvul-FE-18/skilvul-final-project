import { useState } from "react";
import ReactQuill from "react-quill";

function FormArtikelAdmin({ onSubmit }) {
  const [value, setValue] = useState({
    categori: "",
    createdAt: "",
    title: "",
    description: "",
  });

  // const [quillValue, setQuillValue] = useState("");

  const handleSubmit = () => {
    onSubmit(value);
    setValue({
      categori: "",
      createdAt: "",
      title: "",
      description: "",
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

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
            value={value.categori}
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
            value={value.createdAt}
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
            value={value.title}
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
            value={value.image}
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
            value={value.description}
            onChange={handleChange}
          style={{ height: "100px" }}
        ></textarea>
          {/* <ReactQuill
            theme="snow"
            id="description"
            name="description"
            value={value.description}
            onChange={handleChange}
          /> */}
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12">
          <button className="btn btn-primary" onClick={handleSubmit}>
            simpan
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormArtikelAdmin;
