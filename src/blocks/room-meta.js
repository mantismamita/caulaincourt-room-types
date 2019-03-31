import icons from "./icons";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

const {
    MediaUpload
} = wp.editor;

const {
    RadioControl,
    SelectControl,
    RangeControl,
    Button
} = wp.components;

registerBlockType("caulaincourt/rooms-meta-block", {
    title: "Room Meta Block",
    icon: "admin-network",
    category: "common",
    attributes: {
        selectValueNumPersons: {
            type: "integer",
            source: "meta",
            meta: "max_number_persons"
        },
        valueListedPrice: {
            type: "integer",
            source: "meta",
            meta: "listed_price"
        },
        radioPriceScope: {
            type: "string",
            source: "meta",
            meta: "price_scope"
        },
        mediaUploadBedIconImage: {
            type: "string",
            source: "meta",
            meta: "bed_icon_image"
        },
        selectValueBedType: {
            type: "string",
            source: "meta",
            meta: "bed_type"
        },
        selectMultipleExtras: {
            type: "array",
            source: "meta",
            meta: "extras_list"
        }
    },
    edit(props) {
        const { attributes: { selectValueNumPersons, valueListedPrice, radioPriceScope, mediaUploadBedIconImage, selectValueBedType, selectMultipleExtras }, setAttributes } = props;

        const updateNumberPersons = ( choice ) => {
            setAttributes({ selectValueNumPersons: choice });
        };
        const updatedListPrice = ( listPrice ) => {
            setAttributes({ valueListedPrice: listPrice });
        };
        const updatedPriceScope = ( scope ) => {
            setAttributes({ radioPriceScope: scope });
        };
        const updateUploadBedIconImage = ( img ) => {
            setAttributes({  mediaUploadBedIconImage: img.url })
        };
        const updateBedType = ( choice ) => {
            setAttributes({ selectValueBedType: choice });
        };
        const updateSelectedExtras = ( choices ) => {
            setAttributes({ selectMultipleExtras: choices });
        };

        return (
            <div>
                <SelectControl
                    label={ __( 'Max number of people per room' ) }
                    value={ selectValueNumPersons }
                    onChange={ updateNumberPersons }
                    options={ [
                        { value: 1, label: __('max 1 person' )},
                        { value: 2, label: __('max 2 people' )},
                        { value: 3, label: __('max 3 people' )},
                        { value: 4, label: __('max 4 people' )},
                        { value: 5, label: __('max 5 people' )},
                        { value: 6, label: __('max 6 people' )},
                    ] }
                />
                <MediaUpload
                    buttonProps={ {
                        className: 'change-image'
                    } }
                    onSelect={ updateUploadBedIconImage }
                    type="image"
                    value={ mediaUploadBedIconImage }
                    render={ ( { open } ) => (
                        <div className="caulaincourt-room-types-icon-wrap">
                        <p className="caulaincourt-room-types-icon-label">Choose an icon for this type of bed</p>
                        <Button onClick={ open }>
                            { ! mediaUploadBedIconImage ? <span className="icon">{icons.upload}</span> : <img
                                className="caulaincourt-room-types-icon"
                                src={ mediaUploadBedIconImage }
                                alt="icon"
                            />  }
                        </Button>
                        </div>
                    ) }
                >
                </MediaUpload>
                <SelectControl
                    label={ __( 'Type of bed' ) }
                    value={ selectValueBedType }
                    onChange={ updateBedType }
                    options={ [
                        { label: 'single', value: __('Single bed')},
                        { label: 'double', value: __('Double bed')},
                        { label: 'twin', value: __('2 Single beds')},
                        { label: 'triple', value: __('3 Single beds')},
                        { label: 'triple family', value: __('1 Double bed and 1 Single Bed')},
                        { label: 'bunk beds', value: __('Bunk beds')}
                    ] }
                />
                <RangeControl
                    label={ __("List Price in Euros") }
                    value={ valueListedPrice }
                    onChange={ updatedListPrice }
                    min={ 20 }
                    max={ 300 }
                />

                <RadioControl
                    label={ __("Price per") }
                    selected={ radioPriceScope }
                    onChange={ updatedPriceScope }
                    options={ [
                        { label: 'per person', value: __('person') },
                        { label: 'per room', value: __('room') }
                    ] }
                />
                <SelectControl
                    label={ __( 'Select extras (press shift button to select more than one)') }
                    multiple={ true }
                    value={ selectMultipleExtras }
                    onChange={ updateSelectedExtras }
                    options={ [
                        { label: __('breakfast' ), value: __('Breakfast included' ) },
                        { label: __('air-conditioning' ), value: __('Air conditioning' ) },
                        { label: __('free-wifi' ), value: __('free WIFI') },
                        { label: __('hairdryer' ), value: __('hairdryer' ) },
                        { label: __('telephone' ), value: __('telephone') },
                        { label: __('television'), value: __('televison') },
                        { label: __('view'), value: __('Room with view') },
                        { label: __('private shower'), value: __('Private shower') },
                        { label: __('private toilet'), value: __('Private toilet') },
                        { label: __('bed linens'), value: __('Bed Linens') }
                    ] }
                />
            </div>
        );
    },
    save() {
        return null;
    }
} );