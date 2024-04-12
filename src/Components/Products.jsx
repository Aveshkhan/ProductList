import React from 'react';
import TabComponent from './TabComponent';
import searchIcon from '../assets/iconoir_search.svg'
import addIcon from '../assets/plusIcon.svg'
import filterIcon from '../assets/filter.svg'
import exportIcon from '../assets/Export.svg'
import closeIcon from '../assets/close.svg'
import sortIcon from '../assets/SortIcon.svg'
import first from '../assets/First.svg'
import prev from '../assets/Prev.svg'
import next from '../assets/Next.svg'
import last from '../assets/Last.svg'

const Products = () => {

    const filterActive = () => {
        document.getElementById('productListing').classList.toggle('filterActive')

    }
    return (
        <>
            <div id='productListing' className="mx-3 mx-md-4 my-4">


                <div className="customTable">
                    <div className="tableLeft">
                        <TabComponent></TabComponent>
                        <div className="tableTop mb-4">
                            <div className="searchBar">
                                <label>Search</label>
                                <div className="searchInput">
                                    <img src={searchIcon} alt="searchIcon" />
                                    <input type="text" placeholder='Search' />
                                </div>
                            </div>

                            <div className="tableRight">
                                <button className="customBtn"> <img src={addIcon} alt="" /> Add Products</button>
                                <button className="customBtn2" onClick={filterActive}> <img src={filterIcon} alt="" /> Filters</button>
                                <button className="customBtn3"> <img src={exportIcon} alt="" /> Export</button>
                            </div>
                        </div>
                        <div class="table-responsive w-100">
                            <table class="table table-hover">
                                <thead className='table-dark'>
                                    <tr>
                                        <th scope="col">
                                            <input class="form-check-input m-1" type="checkbox" value="" />
                                        </th>
                                        <th className='tableWidth' scope="col">Sr No. <span> <img src={sortIcon} alt="" /></span></th>
                                        <th className='tableWidth' scope="col">Heading 1 <span> <img src={sortIcon} alt="" /></span></th>
                                        <th className='tableWidth' scope="col">Heading 2 <span> <img src={sortIcon} alt="" /></span></th>
                                        <th className='tableWidth' scope="col">Heading 3 <span> <img src={sortIcon} alt="" /></span></th>
                                        <th className='tableWidth' scope="col">Heading 4 <span> <img src={sortIcon} alt="" /></span></th>
                                        <th className='tableWidth' scope="col">Heading 5 <span> <img src={sortIcon} alt="" /></span></th>
                                        <th className='tableWidth' scope="col">Heading 6 <span> <img src={sortIcon} alt="" /></span></th>
                                        <th className='tableWidth' scope="col">Heading 7 <span> <img src={sortIcon} alt="" /></span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            <input class="form-check-input m-1" type="checkbox" value="" />
                                        </th>
                                        <td>1.</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <input class="form-check-input m-1" type="checkbox" value="" />
                                        </th>
                                        <td>2.</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <input class="form-check-input m-1" type="checkbox" value="" />
                                        </th>
                                        <td>1.</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <input class="form-check-input m-1" type="checkbox" value="" />
                                        </th>
                                        <td>2.</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <input class="form-check-input m-1" type="checkbox" value="" />
                                        </th>
                                        <td>1.</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <input class="form-check-input m-1" type="checkbox" value="" />
                                        </th>
                                        <td>2.</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <input class="form-check-input m-1" type="checkbox" value="" />
                                        </th>
                                        <td>1.</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <input class="form-check-input m-1" type="checkbox" value="" />
                                        </th>
                                        <td>2.</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <input class="form-check-input m-1" type="checkbox" value="" />
                                        </th>
                                        <td>1.</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <input class="form-check-input m-1" type="checkbox" value="" />
                                        </th>
                                        <td>2.</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <input class="form-check-input m-1" type="checkbox" value="" />
                                        </th>
                                        <td>1.</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <input class="form-check-input m-1" type="checkbox" value="" />
                                        </th>
                                        <td>2.</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                        <td>item</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="pagination">
                            <div className="paginationBtns">
                                <div className="paginationBtn"><img src={first} alt="first" /></div>
                                <div className="paginationBtn"><img src={prev} alt="prev" /></div>
                                <div className="paginationBtn active">1</div>
                                <div className="paginationBtn">2</div>
                                <div className="paginationBtn">3</div>
                                <div className="paginationBtn">...</div>
                                <div className="paginationBtn">10</div>
                                <div className="paginationBtn"><img src={next} alt="next" /></div>
                                <div className="paginationBtn"><img src={last} alt="last" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="filterTab card border-0">
                        <div class="card-header py-3">
                            <h4 className='mb-0 fs-5'>Filters</h4>
                            <img className='cursorPointer' onClick={filterActive} src={closeIcon} alt="close" />
                        </div>
                        <div class="card-body">
                            <div class="mb-3">
                                <label class="form-label fs-8 mb-0">Product Name</label>
                                <input type="text" class="form-control" placeholder="Product Name" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label fs-8 mb-0">Category</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Category</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label class="form-label fs-8 mb-0">Event Name</label>
                                <input type="text" class="form-control" placeholder="Event Name" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label fs-8 mb-0">Match Name</label>
                                <input type="text" class="form-control" placeholder="Match Name" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label fs-8 mb-0">Team</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Team</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div className="filterBtn p-3">
                            <button className="customBtn w-100 mb-3">Apply</button>
                            <button className="customBtn2 w-100">Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products