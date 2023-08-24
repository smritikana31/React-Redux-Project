import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

export default function AllProducts() {

    const items = useSelector((state) => state.allCart.items);
    const dispatch = useDispatch();


  return (
    <div className='m-2'>
    <MDBContainer>
    <MDBRow className='mb'>
    {items.map((item) => (
    <MDBCol key={item.id} size='4'>
    <MDBCard>
      <MDBCardImage src={item.img} position='center' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>{item.title}</MDBCardTitle>
        <MDBCardText>
          ${item.price}
        </MDBCardText>
        <MDBBtn type="button"
        className="btn btn-danger  mb"
        data-mdb-toggle="tooltip"
        title="Move to the wish list"
        onClick={() => dispatch(addToCart(item))}>
        Add to Wish List
        </MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </MDBCol>
    ))}
    </MDBRow>
    </MDBContainer>
    </div>
  );
}
