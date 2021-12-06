import React from 'react'
import { Input, HelperText, Label, Select, Textarea } from '@windmill/react-ui'
import PageTitle from '../../components/Typography/PageTitle'
import { Button } from '@windmill/react-ui'

function NewProduct() {
  return (
    <>
      <PageTitle>Add New Product</PageTitle>

      <Label>
        <span>Product Title</span>
        <Input className="mt-1" />
      </Label>
      <Label className="mt-4">
        <span>Categories</span>
        <Select className="mt-1">
          <option>$1,000</option>
          <option>$5,000</option>
        </Select>
      </Label>
      <Label className="mt-4">
        <span>Price</span>
        <Input className="mt-1" />
      </Label>
      <Label className="mt-4">
        <span>SKU</span>
        <Input className="mt-1" />
      </Label>
      <Label className="mt-4">
        <span>Quantity</span>
        <Input className="mt-1" />
      </Label>
      <Label className="mt-4">
        <span>Image</span>
        <Input type="file" className="mt-1" />
      </Label>
      <Label className="mt-4">
        <span>Discription</span>
        <Textarea className="mt-1" rows="6" placeholder="Enter some long form content." />
      </Label>
      <div className="mt-4 mb-4">
        <Button block>Add New Product</Button>
      </div>
    </>
  )
}

export default NewProduct
