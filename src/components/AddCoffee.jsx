
import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo };
        console.log(newCoffee);

        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId) {
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
            <form onSubmit={handleAddCoffee}>
                {/* form name and quantity row */}
                <div className='md:flex gap-4 mb-4'>
                    <div className='form-control w-1/2'>
                        <label className="">
                            <span>Coffee Name</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name='name' className="w-full" placeholder="coffee name" />
                        </label>
                    </div>
                    <div className='form-control w-1/2'>
                        <label className="">
                            <span>Quantity</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name='quantity' className="w-full" placeholder="quantity" />
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
                            <input type="text" name='supplier' className="w-full" placeholder="supplier" />
                        </label>
                    </div>
                    <div className='form-control w-1/2'>
                        <label className="">
                            <span>Taste</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name='taste' className="w-full" placeholder="taste" />
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
                            <input type="text" name='category' className="w-full" placeholder="category" />
                        </label>
                    </div>
                    <div className='form-control w-1/2'>
                        <label className="">
                            <span>Details</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name='details' className="w-full" placeholder="details" />
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
                            <input type="text" name='photo' className="w-full" placeholder="photo url" />
                        </label>
                    </div>
                </div>
                <input className='btn btn-block bg-orange-200 text-2xl text-rose-900' type="submit" value="Add Coffee" />
            </form>

        </div>
    );
};

export default AddCoffee;