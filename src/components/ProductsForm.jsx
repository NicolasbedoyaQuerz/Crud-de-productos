import { useForm } from "react-hook-form";
import { useEffect } from "react";


const ProductsForm = ({ createProduct, selectedProduct,  updateProduct}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (selectedProduct) {
      
      reset(selectedProduct);
    } else {
     
      emptyForm();
    }
  }, [selectedProduct]);

  const submit = (data) => {
    if (selectedProduct) {
      updateProduct(data);
    } else {
      createProduct(data);

      emptyForm();
    }
  };

  const emptyForm = () => {
    reset({
      name: "",
      category: "",
      price: "",
      isAvailable: true
    });
  };

  return (
    <div >
        <h1 className="title-form">Agrega tus productos</h1>
      <div className="form">
        <form onSubmit={handleSubmit(submit)}>
          <div className="input-wrapper">
            <label htmlFor="name">Nombre Producto </label>
            <input
              type="text"
              id="name"
              placeholder="nombre del producto"
              {...register("name", { required: true })}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="category">Categoria </label>
            <input
              type="text"
              id="category"
              placeholder="categoria "
              {...register("category", { required: true })}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="price">Precio </label>
            <input
              type="number"
              min={"1"}
              id="price"
              placeholder="precio"
              {...register("price", { required: true })}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="isAvailable">Esta Disponible </label>
            <input
              type="checkbox"
              id="isAvailable"
              placeholder=""
              {...register("isAvailable")}
            />
          </div>
    
          <button className="btnSumit" type="submit">
            Registrar Información
          </button>
        </form>
    
      </div>
    </div>
  );
};
export default ProductsForm