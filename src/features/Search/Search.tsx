import React,{ useState } from 'react'

import { TbSearch } from "react-icons/tb"
import { FoodSearch, Footer } from '../../components'
import AnimatedPage from '../../components/AnimatedPage'
import { FoodSearchData } from '../../components/FoodSearch/FoodSearchData'

interface ISearchType {
    id: number,
    name: string,
    imageUrl: string
}

const Search = () => {
    const [search, setSearch] = useState('')
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    };

    return (
    <AnimatedPage>
    <div className='flex flex-col min-h-[100vh]'>
        <div className='flex flex-col items-center justify-center'>
            <div className="flex items-center justify-center w-[90%] mx-10 sm:w-[30%] md:w-[30%] lg:w-[30%] gap-5 mt-5 border rounded-full px-7 py-2">
                <TbSearch className='text-3xl'/>
                 <input 
                    type="search" 
                    name="search"  
                     value={search}
                    onChange={handleSearch}
                    className='w-[100%] rounded-full outline-none bg-transparent'
                    placeholder='Enter the name of the resturant or dish'
                />
            </div>
            <div className='grid grid-cols-2 gap-6 mt-10 mb-3'>
                {FoodSearchData.filter((item: ISearchType) => {
                    if (search === '') {
                        return item
                    } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
                        return item
                    }
                }).map((item, key) => {
                    return <FoodSearch name={item.name} imageUrl={item.imageUrl} key={item.id} />
                })}
            </div>
        </div>
        <Footer />
    </div>
    </AnimatedPage>
  )
}

export default Search