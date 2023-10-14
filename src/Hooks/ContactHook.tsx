import { useQuery } from "@tanstack/react-query"
import { view, viewContactCategoryAPI } from "../APIs/ContactAPI"

export const useGetContacts = () => {
    const { data : allContacts , isLoading}   = useQuery({
        queryKey : ["allContacts"],
        queryFn : view
    });
    console.log(allContacts);
    
    return { allContacts , isLoading}
}

export const useGetContactCategory = () => {
    const { data : contactCategory , isLoading}   = useQuery({
        queryKey : ["contactCategory"],
        queryFn : viewContactCategoryAPI
    });

    return { contactCategory , isLoading}
}