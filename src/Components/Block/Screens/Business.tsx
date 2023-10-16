import { useGetContacts } from "../../../Hooks/ContactHook"

const Business = () => {

  const {contacts} = useGetContacts()

  return (
    <div className="w-[calc(100vw-240px)] h-[calc(100vh-80px)] bg-red-500 thirdPoint:w-[100vw]">
        
        
        {
          contacts?.map((props:any)=>(
            <div className="w-full  p-4 flex items-center  secondPoint:w-[100vw]   fifthPoint:p-0 fifthPoint:pt-5" key={props?._id}>
          <div className="w-[50px] h-[50px] rounded-[50%] border mr-5">{props?.avatar}</div>
          <div className="text-[25px] fifthPoint:text-[20px]">{props?.name}</div>
          <div className="text-[25px] fifthPoint:text-[20px]">{props?.number}</div>
        </div>
          ))
        }
    </div>
  )
}

export default Business