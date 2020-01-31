import React from "react";
import { CustomInput, FormGroup } from 'reactstrap';

import './SearchBar.style.scss';

const SelectList = () => {

    return(

        <FormGroup className='form-select-list'>
            <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
                <option value="">All</option>
                <option>Beauty</option>
                <option>Value 2</option>
                <option>Value 3</option>
                <option>Value 4</option>
                <option>Value 5</option>
            </CustomInput>
        </FormGroup>

    );
};

export default SelectList;