import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import { Col } from '../styleGrid/grid';


import { CardButton, Title } from './styles'

export default function QuestionCategoryCard() {


    const [categories, setCategories] = useState([])


    useEffect(() => {
        async function loadCategories() {
            const response = await api.get()
            const data = await response.data
            let categories = []

            data.forEach( question => {
                if ( !categories.includes(question.category) ) { categories.push(question.category) }
            } )

            setCategories(categories)
        }

        loadCategories()
     }, [
        categories
     ])

  return (
            <>
            { categories.map( ( category, cat ) => (
                                <Link to={`/test/${category}`}key={ cat }>
                                <Col id={category} 
                                 de='3' xs='6' sm='4' md='3'>
                                    <CardButton>
                                        <Title>{ category }</Title>
                                    </CardButton>
                                </Col>
                                </Link>
                            ) )}

            </> 
  )
}
