import React from 'react'

export default function Footer() {
  return (
    <>
    <div className="wave">
      <img src="/images/wave.svg" alt="BG-wave" />
    </div>

    <footer style={{background: `radial-gradient(50% 50% at 50% 50%, #106109 0%, #185013 100%)` }}>
    <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
		<div className="lg:w-1/3">
			<a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
				<div className="flex items-center justify-center w-12 h-12 rounded-full">
					<img src="\images\Group.svg" alt="" />
				</div>
				<span className="self-center text-2xl font-semibold text-[35px] text-[white]">Aahaar</span>
			</a>
            <span><div className="text-sm text-[#a5a5a5]">© 1968 Company Co. All rights reserved.</div></span>
		</div>
		<div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4 mb-4">
			<div className="space-y-3">
				<h3 className="tracki uppercase font-semibold text-[white] my-4">Explore</h3>
				<ul className="space-y-1 text-[white]">
					<li>
						<a rel="noopener noreferrer" href="#">Home</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">About Us</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Our Support</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Blog</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="tracki uppercase dark:text-gray-50 my-4">Get Involved</h3>
				<ul className="space-y-1 text-[white]">
					<li>
						<a rel="noopener noreferrer" href="#">Donate</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Volunteer</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="uppercase dark:text-gray-50 my-4">Connect</h3>
				<ul className="space-y-1 text-[white]">
					<li>
						<a rel="noopener noreferrer" href="#">Conatct Us</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Support Us</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">FAQ</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<div className="uppercase dark:text-gray-50 my-4">Social media</div>
				<div className="flex justify-start space-x-3">
					<a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1">
						<img src="\images\icons-instagram.svg" alt="" />
					</a>
					<a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center p-1">
						<img src="\images\icons-facebook.svg" alt="" />
					</a>
					<a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1">
						<img src="\images\icons-twitter.svg" />
					</a>
				</div>
			</div>
		</div>
	</div>
    </footer>
    </>
  )
}
