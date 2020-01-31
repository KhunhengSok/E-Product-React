import React from "react";

import './SearchBar.style.scss'
import { Input, InputGroup, InputGroupAddon, Button } from 'reactstrap';
import SelectList from "./SelectList.component";

const SearchBar = () => (

    <div className='search-bar'>
        <InputGroup>
            <SelectList/>
            <Input id='form-space' placeholder="      " />
            <InputGroupAddon addonType="append">
                <Button color="secondary">Search</Button>
            </InputGroupAddon>
        </InputGroup>
    </div>

);


export default SearchBar;