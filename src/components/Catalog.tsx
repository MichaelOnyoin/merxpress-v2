'use client'
import React from "react";
import { useState } from "react";
import { LayoutList, LayoutGrid } from "lucide-react";

export const Catalog: React.FC = () => {
    const price:number=0;
    const [value, setValue] = useState(price || 1000);
   
    function onSliderChange(e: React.ChangeEvent<HTMLInputElement>) {
        const newValue = Number(e.target.value)
        setValue(newValue)
    }
    return (
        <div className="w-full p-2 ">
            <nav className="text-md text-gray-500 font-semibold mb-4 px-0 mr-0">
                <a href="#" className="hover:underline  mr-4">Home</a> /     
                <a href="#" className="hover:underline ml-2 mr-4">Catalog</a> / 
                <a href="#" className="hover:underline ml-4 mr-4">Kitchen Utensils</a> /
            </nav>
            <h1 className="text-4xl font-bold mb-4">Cutting Tools and Accessories (136)</h1>
            <div className="flex flex-wrap">
                <aside className="w-full md:w-1/4 p-4 bg-white text-slate-800 rounded-lg shadow-md mb-4 md:mb-0">
                    <div className="mb-4">
                        <h2 className="font-bold mb-2">Price</h2>
                        <div className="flex justify-between items-center mb-2">
                            <input type="text" className="border rounded p-1 w-1/2 mr-2" defaultValue={0} />
                            <input type="text" className="border rounded p-1 w-1/2 "
                             value={`$${value}`}
                             //defaultValue={0}
                             
                             />
                        </div>
                        <input type="range" className="w-full accent-red-500"
                         min={0}
                         max={1000}
                         value={value}
                         onChange={onSliderChange}
                         />
                        <button className="text-red-500 mt-2">Clear</button>
                    </div>
                    <div className="mb-4">
                        <h2 className="font-bold mb-2">Delivery Time</h2>
                        <div className="flex flex-col">
                            <label className="flex items-center mb-2">
                                <input type="radio" name="delivery" className="mr-2" onChange={() => {/* handle change */}} /> Any
                            </label>
                            <label className="flex items-center mb-2">
                                <input type="radio" name="delivery" className="mr-2" defaultChecked /> Today
                            </label>
                            <label className="flex items-center mb-2">
                                <input type="radio" name="delivery" className="mr-2" onChange={() => {/* handle change */}} /> Tomorrow
                            </label>
                            <label className="flex items-center mb-2">
                                <input type="radio" name="delivery" className="mr-2" onChange={() => {/* handle change */}}/> Up to 3 days
                            </label>
                            <label className="flex items-center mb-2">
                                <input type="radio" name="delivery" className="mr-2" onChange={() => {/* handle change */}} /> Up to 7 days
                            </label>
                        </div>
                        <button className="text-red-500 mt-2">Clear</button>
                    </div>
                    <div className="mb-4">
                        <h2 className="font-bold mb-2">Brand</h2>
                        <input type="text" className="border rounded p-1 w-full mb-2 " placeholder="Start typing" />
                        <div className="flex flex-col">
                            <label className="flex items-center mb-2">
                                <input type="checkbox" className="mr-2" /> Wüsthof
                            </label>
                            <label className="flex items-center mb-2">
                                <input type="checkbox" className="mr-2" /> Shun
                            </label>
                            <label className="flex items-center mb-2">
                                <input type="checkbox" className="mr-2" /> Victorinox
                            </label>
                            <label className="flex items-center mb-2">
                                <input type="checkbox" className="mr-2" /> ZWilling
                            </label>
                            <label className="flex items-center mb-2">
                                <input type="checkbox" className="mr-2" /> 0XO
                            </label>
                            
                        </div>
                    </div>
                    <div className="mb-4">
                        <h2 className="font-bold mb-2">Type</h2>
                        <input type="text" className="border rounded p-1 w-full mb-2" placeholder="Start typing" />
                        <div className="flex flex-col">
                            <label className="flex items-center mb-2">
                                <input type="checkbox" className="mr-2" /> Chef&apos;s Knives
                            </label>
                            <label className="flex items-center mb-2">
                                <input type="checkbox" className="mr-2" /> Knife Sharpner
                            </label>
                            <label className="flex items-center mb-2">
                                <input type="checkbox" className="mr-2" /> Knife shears
                            </label>
                            <label className="flex items-center mb-2">
                                <input type="checkbox" className="mr-2" /> Peelers
                            </label>
                            <label className="flex items-center mb-2">
                                <input type="checkbox" className="mr-2" /> Graters and Zesters
                            </label>
                            
                        </div>
                        <button className="text-red-500 mt-2">Clear</button>
                    </div>
                    <button className="rounded-md font-semibold bg-white justify-center items-center text-red-400 border 2 border-red-400 px-4 w-full h-10 hover:bg-red-400 hover:text-white">Apply</button>
                   
                
                </aside>
                
                
                <main className="w-full md:w-3/4 p-4">
                    <div className="flex justify-between items-center mb-4">
                        <select className="border rounded p-2">
                            <option>Lowest Price</option>
                            <option>Highest Price</option>
                            <option>Best Sellers</option>
                        </select>
                        <div className="flex items-center">
                            <select className="border rounded p-2 mr-2">
                                <option>16 per Page</option>
                                <option>8 Per Page</option>
                                <option>32 Per Page</option>
                                <option>64 Per Page</option>
                            </select>
                            <div className="flex">
                                <button className="border rounded p-2 mr-2">
                                    {/* <i className="fas fa-th"></i> */}
                                    <LayoutGrid size={24} className="hover:text-red-500" />
                                </button>
                                <button className="border rounded p-2">
                                    {/* <i className="fas fa-list"></i> */}
                                    <LayoutList size={24} className="hover:text-red-500" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        <div className="bg-white rounded-lg shadow-md p-4 relative">
                            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">SALE</span>
                            <img src="https://placehold.co/300x200" alt="WÜSTHOF Classic 8&quot; Chef's Knife" className="w-full h-40 object-cover mb-4" />
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-red-500 text-xl font-bold">$123.94</span>
                                <span className="text-gray-500 line-through">$400.09</span>
                                <span className="text-red-500">-5%</span>
                            </div>
                            <h3 className="font-bold mb-2 text-gray-800">WÜSTHOF Classic 8&qout; Chef&apos;s Knife</h3>
                            <p className="text-gray-500 text-sm">Multipurpose knife with high carbon stainless steel blade for precision and durability</p>
                            <button className="absolute top-2 right-2 text-red-500">
                                <i className="far fa-heart"></i>
                            </button>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-4 relative">
                            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">SALE</span>
                            <img src="https://placehold.co/300x200" alt="Chef&apos;sChoice 15 Trizor XV EdgeSelect Professional Electric Knife Sharpener" className="w-full h-40 object-cover mb-4" />
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-red-500 text-xl font-bold">$127.49</span>
                                <span className="text-gray-500 line-through">$150.09</span>
                                <span className="text-red-500">-15%</span>
                            </div>
                            <h3 className="font-bold mb-2 text-gray-800">Chef&apos;sChoice 15 Trizor XV EdgeSelect Professional Electric Knife Sharpener</h3>
                            <p className="text-gray-500 text-sm">Converts knives to 15-degree edges for professional-level sharpness</p>
                            <button className="absolute top-2 right-2 text-red-500">
                                <i className="far fa-heart"></i>
                            </button>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-4 relative">
                            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
                            {/* <span className="absolute top-2 left-12 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">SALE</span> */}
                            <img src="https://placehold.co/300x200" alt="Shun Classic Blonde 6&quot; Chef's Knife" className="w-full h-40 object-cover mb-4" />
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-red-500 text-xl font-bold">$143.95</span>
                                <span className="text-gray-500 line-through">$400.09</span>
                                <span className="text-red-500">-20%</span>
                            </div>
                            <h3 className="font-bold mb-2 text-gray-800">Shun Classic Blonde 6&qout; Chef&apos;s Knife</h3>
                            <p className="text-gray-500 text-sm">Handcrafted Japanese Kitchen Knife, VG-MAX Core with Damascus Stainless Steel Cladding</p>
                            <button className="absolute top-2 right-2 text-red-500">
                                <i className="far fa-heart"></i>
                            </button>
                        </div>
                        

                        <div className="bg-white rounded-lg shadow-md p-4 relative">
                            <img src="https://placehold.co/300x200" alt="Whetstone 1000 6000 Grit Kitchen Knife Sharpening Stones" className="w-full h-40 object-cover mb-4" />
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-red-500 text-xl font-bold">$18.99</span>
                            </div>
                            <h3 className="font-bold mb-2 text-gray-800">Whetstone 1000 6000 Grit Kitchen Knife Sharpening Stones</h3>
                            <p className="text-gray-500 text-sm">Dual-grit whetstone with a bamboo base for manual sharpening</p>
                            <button className="absolute top-2 right-2 text-red-500">
                                <i className="far fa-heart"></i>
                            </button>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-4 relative">
                            <img src="https://placehold.co/300x200" alt="OXO Good Grips Swivel Peeler" className="w-full h-40 object-cover mb-4" />
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-red-500 text-xl font-bold">$8.99</span>
                            </div>
                            <h3 className="font-bold mb-2 text-gray-800">OXO Good Grips Swivel Peeler</h3>
                            <p className="text-gray-500 text-sm">Stainless steel blade with a comfortable non-slip handle</p>
                            <button className="absolute top-2 right-2 text-red-500">
                                <i className="far fa-heart"></i>
                            </button>
                        </div>
                    </div>
                </main>
                <aside className="w-full md:w-1/4 mb-4 md:mb-0">
                    <div className=" ">
                    <img loading="lazy"
                        src={'https://cdn.builder.io/api/v1/image/assets/TEMP/7aed7a89983aedb0cce43eb1618b9e28780a0caded8fa0641c1cf25cb69fcd23?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&'}
                        alt={'knife banner'}
                        className="object-contain mt-10 w-full rounded-2xl aspect-[0.56]"
                    />

                    </div>

                </aside>
            </div>
        </div>
    );
};