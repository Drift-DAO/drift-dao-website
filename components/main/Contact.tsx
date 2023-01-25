import React from 'react';
import Image from 'next/image';
import Contact_form from './Contact_form';
import Footer from '../layout/Footer';

const Contact = () => {
	return (
		<div className="bg-[url('/images/bg-3.jpg')] bg-fixed" id="contact">
			<div className="grid sm:grid-cols-2 gap-4">
				<div className="sm:flex items-center justify-center sm:h-screen mt-5">
					<div
						style={{ position: 'relative' }}
						className="m-auto flex justify-center"
					>
						<img
							src="/images/Net.svg"
							// fill={true}
							alt="load.."
							
							style={{
								width: '300px',
								maxHeight: '300px',
							}}
						/>
					</div>
				</div>
				<div className=" justify-center">
					<div className="text-white text-6xl sm:pt-60 pt-10 md:pt-48 ml-8">
						Reach out to us
					</div>
					<div className="text-white my-10 sm:text-xl sm:ml-8 mx-5 text-lg ">
						<Contact_form />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Contact;
