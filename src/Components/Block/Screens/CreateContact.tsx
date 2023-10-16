import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { createContactAPI } from "../../../APIs/ContactAPI";
import Swal from "sweetalert2"

const CreateContact = () => {
  const schema = yup.object({
    name: yup.string().required(),
    number: yup.string().required(),
    category: yup.string().required(),
  });

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = handleSubmit((res: any) => {
      createContactAPI(res).then(() => {
        console.log("create page res",res);
        
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Created Contact Successfully",
          showConfirmButton: false,
          timer: 2000,
        })
      })
    reset()
  });

  return (
    <div className="w-[calc(100vw-240px)] h-[calc(100vh-80px)] border    thirdPoint:w-[100vw] flex justify-center items-center">
      <form
        className="w-[450px] h-[25s0px] border p-4"
        onSubmit={onHandleSubmit}
      >
        <div className="relative my-4">
          <div className="absolute top-[-12px] left-[10px] bg-white">Name</div>
          <input
            className="w-full h-[50px] border pl-3 outline-none"
            placeholder="Name"
            {...register("name")}
          />
        </div>
        <div className="relative my-4">
          <div className="absolute top-[-12px] left-[10px] bg-white">
            Number
          </div>
          <input
            className="w-full h-[50px] border pl-3 outline-none"
            placeholder="Number"
            {...register("number")}
          />
        </div>

        <div className="relative my-4 flex items-center justify-center">
         
            <select id="" className="w-full h-full outline-none border py-2.5 pl-3"
            {...register("category")}
            >
              <option value="">Select Category</option>
              <option value="family">Family</option>
              <option value="friends">Friends</option>
              <option value="business">Business</option>
            </select>
         
        </div>
        <button
          className="w-full h-[40px] bg-purple-500 rounded-md text-white"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateContact;
