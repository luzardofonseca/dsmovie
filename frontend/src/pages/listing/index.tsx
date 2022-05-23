import './styles.css';
import Pagination from "../../components/pagination";
import MovieCard from 'components/moviecard';

function listing() {

    return (
        <>
            <Pagination />
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6 col-lg-4 col-xl-3 mb-3'>
                        <MovieCard />
                    </div>
                    <div className='col-sm-6 col-lg-4 col-xl-3 mb-3'>
                        <MovieCard />
                    </div>
                    <div className='col-sm-6 col-lg-4 col-xl-3 mb-3'>
                        <MovieCard />
                    </div>
                    <div className='col-sm-6 col-lg-4 col-xl-3 mb-3'>
                        <MovieCard />
                    </div>
                    <div className='col-sm-6 col-lg-4 col-xl-3 mb-3'>
                        <MovieCard />
                    </div>
                </div>

            </div >

        </>
    );
}
export default listing;
