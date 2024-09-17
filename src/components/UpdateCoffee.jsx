import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updateCoffee = { name, quantity, supplier, taste, category, details, photo };
        console.log(updateCoffee);

        fetch(`http://localhost:5000/user/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })


    }



    return (
        <div className='bg-[#F4F3F0] p-24'>
            <form onSubmit={handleUpdateCoffee}>
                {/* form name and quantity row */}
                <div className='md:flex gap-4 mb-4'>
                    <div className='form-control w-1/2'>
                        <label className="">
                            <span>Coffee Name</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name='name' className="w-full" defaultValue={name} placeholder="coffee name" />
                        </label>
                    </div>
                    <div className='form-control w-1/2'>
                        <label className="">
                            <span>Quantity</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name='quantity' className="w-full" defaultValue={quantity} placeholder="quantity" />
                        </label>
                    </div>
                </div>
                {/* form supplier and taste row */}
                <div className='md:flex gap-4 mb-4'>
                    <div className='form-control w-1/2'>
                        <label className="">
                            <span>Supplier</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name='supplier' className="w-full" defaultValue={supplier} placeholder="supplier" />
                        </label>
                    </div>
                    <div className='form-control w-1/2'>
                        <label className="">
                            <span>Taste</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name='taste' className="w-full" defaultValue={taste} placeholder="taste" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className='md:flex gap-4 mb-4'>
                    <div className='form-control w-1/2'>
                        <label className="">
                            <span>Category</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name='category' className="w-full" defaultValue={category} placeholder="category" />
                        </label>
                    </div>
                    <div className='form-control w-1/2'>
                        <label className="">
                            <span>Details</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name='details' className="w-full" defaultValue={details} placeholder="details" />
                        </label>
                    </div>
                </div>
                {/* form photo row */}
                <div className='md:flex gap-4 mb-4'>
                    <div className='form-control w-full'>
                        <label className="">
                            <span>Photo</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name='photo' className="w-full" defaultValue={photo} placeholder="photo url" />
                        </label>
                    </div>
                </div>
                <input className='btn btn-block bg-orange-200 text-2xl text-rose-900' type="submit" value="Update Coffee" />
            </form>

        </div>
    );
};

export default UpdateCoffee;