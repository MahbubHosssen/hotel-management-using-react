
import PropTypes from 'prop-types';



function Navbar() {
    return (
        <div className='flex justify-between items-center py-6'>
            <div>
                <h1 className='text-2xl font-bold'>Recipe Calories</h1>
            </div>
            <div>
                <ul className='flex gap-4 text-gray-500'>
                    <li><a href="">Home</a></li>
                    <li><a href="">Receips</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Search</a></li>
                </ul>
            </div>
            <div className='flex gap-3 items-center'>
                <div className='bg-gray-200 flex rounded-full py-2 px-2'>
                    <div className='cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 30 30">
                        <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                    </svg>
                    </div>
                    <input className='bg-gray-200 rounded-md pl-2 outline-none' type="text" placeholder='Search' />
                </div>
                <div>
                <i className="fa-solid fa-circle-user bg-green-500 p-2 text-xl rounded-full"></i>
                </div>
            </div>
        </div>
    );
}
Navbar.propTypes = {
    
};
export default Navbar;