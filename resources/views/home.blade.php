@extends("layout.index")

@section("content")

    <section id="home">
        <div class="home-content">
            <div class="col-12 col-xs-4 col-md-4 col-lg-4">
                <div class="filters">
                    <div class="filters-header">
                        <h4>Filters</h4>
                        <p id="reset-filters">Reset filters <span id="filter-count">0</span></p>
                    </div>
                    <div class="filters-body">
                        <div class="filter-content">
                            <h4>Property Type</h4>
                            <form class="filter-form">
                                <div class="filter-input">
                                    <input id="house" type="checkbox" value="house" class="checkbox" data-filter="property_type">
                                    <label for="house">House</label>
                                </div>
                                <div class="filter-input">
                                    <input id="apartment" type="checkbox" value="apartment" class="checkbox" data-filter="property_type"> 
                                    <label for="apartment">Apartment</label>
                                </div>
                                <div class="filter-input">
                                    <input id="room" type="checkbox" value="room" class="checkbox" data-filter="property_type">
                                    <label for="room">Room</label>
                                </div>
                                <div class="filter-input">
                                    <input id="townhall" type="checkbox" value="townhall" class="checkbox" data-filter="property_type">
                                    <label for="townhall">Townhall</label>
                                </div>
                                <div class="filter-input">
                                    <input id="parking" type="checkbox" value="parking" class="checkbox" data-filter="property_type">
                                    <label for="parking">Parking</label>
                                </div>
                            </form>
                        </div>
                        <div class="filter-content">
                            <h4>Style of Home</h4>
                            <form class="filter-form">
                                <div class="filter-input">
                                    <input id="a-frame" type="checkbox" value="a-frame" class="checkbox" data-filter="style_of_home">
                                    <label for="a-frame">A-Frame</label>
                                </div>
                                <div class="filter-input">
                                    <input id="bungalow" type="checkbox" value="bungalow" class="checkbox" data-filter="style_of_home">
                                    <label for="bungalow">Bungalow</label>
                                </div>
                                <div class="filter-input">
                                    <input id="cottage" type="checkbox" value="cottage" class="checkbox" data-filter="style_of_home">
                                    <label for="cottage">Cottage</label>
                                </div>
                                <div class="filter-input">
                                    <input id="dome" type="checkbox" value="dome" class="checkbox" data-filter="style_of_home">
                                    <label for="dome">Dome</label>
                                </div>
                                <div class="filter-input">
                                    <input id="spanish" type="checkbox" value="spanish" class="checkbox" data-filter="style_of_home">
                                    <label for="spanish">Spanish</label>
                                </div>
                            </form>
                        </div>
                        <div class="select-content">
                            <div class="select-input">
                                <h4>Min. Price</h4>
                                <select name="min-price" id="min-price" class="filter-select" data-filter="price">
                                    <option value="">Any</option>
                                    <option value="10000">$10,000</option>
                                    <option value="20000">$20,000</option>
                                    <option value="30000">$30,000</option>
                                    <option value="1000000">$1,000,000</option>
                                </select>
                            </div>
                            <div class="select-input">
                                <h4>Max. Price</h4>
                                <select name="max-price" id="max-price" class="filter-select" data-filter="price">
                                    <option value="">Any</option>
                                    <option value="10000">$10,000</option>
                                    <option value="20000">$20,000</option>
                                    <option value="30000">$30,000</option>
                                    <option value="1000000">$1,000,000</option>
                                </select>
                            </div>
                        </div>
                        <div class="select-content">
                            <div class="select-input">
                                <h4>Bedroom</h4>
                                <select name="bedroom" id="bedroom" class="filter-select" data-filter="bedroom">
                                    <option value="">Any</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                            <div class="select-input">
                                <h4>Bathroom</h4>
                                <select name="bathroom" id="bathroom" class="filter-select" data-filter="bathroom">
                                    <option value="">Any</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                        </div>
                        <div class="select-content">
                            <div class="select-input">
                                <h4>Size (Min)</h4>
                                <select name="min-price" id="min-size" class="filter-select">
                                    <option value="">Any</option>
                                    <option value="1500">1,500</option>
                                    <option value="2500">2,500</option>
                                    <option value="3500">3,500</option>
                                    <option value="4500">4,500</option>
                                </select>
                            </div>
                            <div class="select-input">
                                <h4>Size (Max)</h4>
                                <select name="max-size" id="max-size" class="filter-select">
                                    <option value="">Any</option>
                                    <option value="1500">1,500</option>
                                    <option value="2500">2,500</option>
                                    <option value="3500">3,500</option>
                                    <option value="4500">4,500</option>
                                </select>
                            </div>
                        </div>
                        <div class="filter-content">
                            <h4>Accessibility features</h4>
                            <form class="filter-form">
                                <div class="filter-input">
                                    <input id="wide-doorways" type="checkbox" value="wide-doorways" class="checkbox" data-filter="accessibility_features">
                                    <label for="wide-doorways">Extra-wide doorways</label>
                                </div>
                                <div class="filter-input">
                                    <input id="ramps" type="checkbox" value="ramps" class="checkbox" data-filter="accessibility_features">
                                    <label for="ramps">Ramps</label>
                                </div>
                                <div class="filter-input">
                                    <input id="grab-bars" type="checkbox" value="grab bars" class="checkbox" data-filter="accessibility_features">
                                    <label for="grab-bars">Grab bars</label>
                                </div>
                                <div class="filter-input">
                                    <input id="counter-heights" type="checkbox" value="counter-heights" class="checkbox" data-filter="accessibility_features">
                                    <label for="counter-heights">Lower counter heights</label>
                                </div>
                                <div class="filter-input">
                                    <input id="spanish-access" type="checkbox" value="spanish" class="checkbox" data-filter="accessibility_features">
                                    <label for="spanish-access">Spanish</label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-12 col-xs-8 col-md-8 col-lg-8">
                <div class="estates-content">
                    <div class="estates-header">
                        <h4>Showing <span id="estates-result">{{$estatesCount}}</span> search results</h4>
                        <div class="sort">
                            <label for="sort-by">Sort by:</label>
                            <select id="sort-by" >
                                <option value="descending">Oldest</option>
                                <option value="ascending">Newest</option>
                            </select>
                        </div>
                    </div>
                    <div class="estates-body">
                        <div class="estates-grid">
                            @foreach ($estates as $item)
                                <div class="estate-item" data-property_type="{{$item->property_type}}" data-style_of_home="{{$item->style_of_home}}" data-accessibility_features="{{$item->accessibility_features}}" data-bedroom="{{$item->bedroom}}" data-bathroom="{{$item->bathroom}}" data-price="{{$item->price}}" data-size="{{$item->size}}" data-created="{{$item->created_at}}">
                                    <div class="estate-image">
                                        <img src={{asset("images/house.jpg")}} alt={{$item->id}}>
                                    </div>
                                    <div class="estate-info">
                                        <p class="price">${{$item->price}}</p>
                                        <p class="location">{{str_replace("Spojené štáty americké","",$item->location)}}</p>
                                        <div class="estate-details">
                                            <div class="estate-details-item">
                                                <i class="fa-solid fa-bath" style="color: #bdbdbd;"></i> <span>{{$item->bathroom}}</span>  
                                            </div>
                                            <div class="estate-details-item">
                                                <i class="fa-solid fa-bed" style="color: #bdbdbd;"></i> <span>{{$item->bedroom}}</span>  
                                            </div>
                                            <div class="estate-details-item">
                                                <i class="fa-solid fa-circle-nodes"  style="color: #bdbdbd;"></i> <span>{{$item->size}}²ft</span>  
                                            </div>
                                        </div>           
                                    </div>
                                </div>
                            @endforeach
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

@endsection