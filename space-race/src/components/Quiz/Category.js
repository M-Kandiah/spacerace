import React, { useState } from 'react'
import { useEffect } from 'react'

const Category = () => {



    // useEffect(() => {

    //     const fetchData = () => {
    //         const coat = await fetch('https://opentdb.com/api_category.php')
    //     }

    //     fetchData()
        
    //     const onlyCat = await coat.trivia_categories
    // }
    //     , [])




    const categories = {
        "trivia_categories": [
            {
                "id": 9,
                "name": "General Knowledge"
            },
            {
                "id": 10,
                "name": "Entertainment: Books"
            },
            {
                "id": 11,
                "name": "Entertainment: Film"
            },
            {
                "id": 12,
                "name": "Entertainment: Music"
            },
            {
                "id": 13,
                "name": "Entertainment: Musicals & Theatres"
            }
        ]
    }

    const onlyCat = categories.trivia_categories



    return (
        <div>
            <form>
                <label for="cate">Choose a car:</label>
                <select name="cate" id="cate">
                    {onlyCat.map(singleCat => <option> {singleCat.name} </option>)}
                </select>

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Category
