/**
 * BLOCK: caulaincourt-room-types
 *
 * Room details
 */

import classnames from 'classnames';

import './style.scss';
import './editor.scss';

import icons from './icons';

const {__} = wp.i18n;
const { Component } = wp.element;
const {registerBlockType} = wp.blocks;
const {
    RichText,
    InspectorControls,
    PanelColorSettings,
    MediaUpload,
} = wp.editor;

const {
    Button,
    PanelBody,
    SelectControl,
} = wp.components;

class Inspector extends Component {
    constructor( props ) {
        super( ...arguments );
    }
    render() {
        const backgroundColors = [
            { color: '#00d1b2', name: 'teal' },
            { color: '#3373dc', name: 'royal blue' },
            { color: '#209cef', name: 'sky blue' },
            { color: '#22d25f', name: 'green' },
            { color: '#ffdd57', name: 'yellow' },
            { color: '#ff3860', name: 'pink' },
            { color: '#7941b6', name: 'purple' },
            { color: '#392F43', name: 'black' },
            { color: 'transparent', name: 'transparent' },
        ];

        const alignOptions = [
            { value: 'left', label: __( 'Left' ) },
            { value: 'right', label: __( 'Right' ) }
        ];

        const { setAttributes, attributes: { background_color, alignment, text_color }} = this.props;

        return(
            <InspectorControls key="inspector">
                <PanelBody>
                    <PanelColorSettings
                        title={ __( 'Background Color' ) }
                        initialOpen={ false }
                        colorSettings={ [ {
                            value: background_color,
                            colors: backgroundColors,
                            onChange: (value) => setAttributes({ background_color: value}),
                            label: __( 'Background Color' ),

                        } ] }
                    />
                    <PanelColorSettings
                        title={ __( 'Price Info Text Color' ) }
                        initialOpen={ false }
                        colorSettings={ [ {
                            value: text_color,
                            colors: backgroundColors,
                            onChange: (value) => setAttributes({ text_color: value}),
                            label: __( 'Text Color' ),

                        } ] }
                    />
                    <SelectControl
                        label={ __( 'Alignment' ) }
                        description={ __( 'Left or right align text.' ) }
                        options={ alignOptions }
                        value={ alignment }
                        onChange={ ( value ) => this.props.setAttributes( { alignment: value } ) }
                    />
                </PanelBody>
            </InspectorControls>
        );
    }
}

class CGBTestimonialBlock extends Component {

    render() {

        const {
            attributes: {
                icon1Url,
                icon2Url,
                icon3Url,
                icon1Id,
                icon2Id,
                icon3Id,
                text1,
                text2,
                text3,
                priceText,
                background_color,
                text_color,
                alignment
            },
            setAttributes
        } = this.props;

        return[
            <Inspector
                { ...{ setAttributes, ...this.props } }
            />,
            <div id="caulaincourt-room-types" className="caulaincourt-room-types" style={{
                backgroundColor: background_color,
                color: text_color,
                padding: '30px',
            }}>
                <p className={ classnames('caulaincourt-room-types-info', alignment)}>
                    <span className={classnames('caulaincourt-room-types-icon-wrap')}>
                        <MediaUpload
                            buttonProps={ {
                                className: 'change-image'
                            } }
                            onSelect={
                                (img) => setAttributes({
                                    icon1Url: img.url,
                                    icon1Id: img.id
                                })
                            }
                            type="image"
                            value={ icon1Id }
                            render={ ( { open } ) => (
                                <Button onClick={ open }>
                                    { ! icon1Id ? <span className="icon">{icons.upload}</span> : <img
                                        className="caulaincourt-room-types-icon1"
                                        src={ icon1Url }
                                        alt="icon1"
                                    />  }
                                </Button>
                            ) }
                        >
                        </MediaUpload>
                    </span>
                    <span className="caulaincourt-room-types-info-description">
                        <RichText
                            tagName="span"
                            placeholder={ __( 'Add text...' ) }
                            keepPlaceholderOnFocus
                            value={ text1 }
                            formattingControls={ [ 'bold', 'italic', 'strikethrough', 'link' ] }
                            className={ classnames(
                                'caulaincourt-room-types-info-description'
                            ) }
                            style={ {
                                textAlign: alignment
                            } }
                            onChange={ ( value ) => setAttributes( { text1: value } ) }
                        />
                    </span>
                </p>
                <p className={ classnames('caulaincourt-room-types-info', alignment)}>
                    <span className={classnames('caulaincourt-room-types-icon-wrap')}>
                        <MediaUpload
                            buttonProps={ {
                                className: 'change-image'
                            } }
                            onSelect={
                                (img) => setAttributes({
                                    icon2Url: img.url,
                                    icon2Id: img.id
                                })
                            }
                            type="image"
                            value={ icon2Id }
                            render={ ( { open } ) => (
                                <Button onClick={ open }>
                                    { ! icon2Id ? <div className="icon">{icons.upload}</div> : <img
                                        className="caulaincourt-room-types-icon2"
                                        src={ icon2Url }
                                        alt="icon2"
                                    />  }
                                </Button>
                            ) }
                        >
                        </MediaUpload>
                    </span>
                    <span className="caulaincourt-room-types-info-description">
                        <RichText
                            tagName="span"
                            placeholder={ __( 'Add text...' ) }
                            keepPlaceholderOnFocus
                            value={ text2 }
                            formattingControls={ [ 'bold', 'italic', 'strikethrough', 'link' ] }
                            className={ classnames(
                                'caulaincourt-room-types-info-description'
                            ) }
                            style={ {
                                textAlign: alignment
                            } }
                            onChange={ ( value ) => setAttributes( {text2: value } ) }
                        />
                    </span>
                </p>
                <p className={ classnames('caulaincourt-room-types-info', alignment)}>
                    <span className={classnames('caulaincourt-room-types-icon-wrap')}>
                        <MediaUpload
                            buttonProps={ {
                                className: 'change-image'
                            } }
                            onSelect={
                                (img) => setAttributes({
                                    icon3Url: img.url,
                                    icon3Id: img.id
                                })
                            }
                            type="image"
                            value={ icon3Id }
                            render={ ( { open } ) => (
                                <Button onClick={ open }>
                                    { ! icon3Id ? <div className="icon">{icons.upload}</div> : <img
                                        className="caulaincourt-room-types-icon3"
                                        src={ icon3Url }
                                        alt="icon3"
                                    />  }
                                </Button>
                            ) }
                        >
                        </MediaUpload>
                    </span>
                    <span className="caulaincourt-room-types-info-description">
                        <RichText
                            tagName="span"
                            placeholder={ __( 'Add text...' ) }
                            keepPlaceholderOnFocus
                            value={ text3 }
                            formattingControls={ [ 'bold', 'italic', 'strikethrough', 'link' ] }
                            className={ classnames(
                                'caulaincourt-room-types-info-description'
                            ) }
                            style={ {
                                textAlign: alignment
                            } }
                            onChange={ ( value ) => setAttributes( { text3: value } ) }
                        />
                    </span>
                    <span className="caulaincourt-room-types-info-description">
                        <RichText
                            tagName="p"
                            placeholder={ __( 'Add price info' ) }
                            keepPlaceholderOnFocus
                            value={ priceText }
                            formattingControls={ [ 'bold', 'italic', 'strikethrough', 'link' ] }
                            className={ classnames(
                                'caulaincourt-room-types-info-description'
                            ) }
                            style={ {
                                textAlign: alignment,
                                color: text_color
                            } }
                            onChange={ ( value ) => setAttributes( { priceText: value } ) }
                        />
                    </span>
                </p>
            </div>
        ];
    }
}


/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType('cgb/block-caulaincourt-room-types', {
    title: __('Room details'),
    icon: 'info',
    category: 'formatting',
    keywords: [
        __('caulaincourt-room-types'),
        __('Room details'),
        __('icon list'),
    ],
    align: ['left', 'right', 'full'],
    attributes: {
        icon1Url: {
            type: 'string',
            default: 'https://placehold.it/100x100'
        },
        icon1Id: {
            type: 'int',
            default: null,
        },
        icon2Url: {
            type: 'string',
            default: 'https://placehold.it/100x100'
        },
        icon2Id: {
            type: 'int',
            default: null,
        },
        icon3Url: {
            type: 'string',
            default: 'https://placehold.it/100x100'
        },
        icon3Id: {
            type: 'int',
            default: null,
        },
        text1: {
            type: 'string',
            default: 'Text 1'
        },
        text2: {
            type: 'string',
            default: 'Text 2'
        },
        text3: {
            type: 'string',
            default: 'Text 3'
        },
        priceText: {
            type: 'string',
            default: 'Starting Price 88€/night for 2 people'
        },
        background_color: {
            type: 'string',
            default: 'transparent'
        },
        text_color: {
            type: 'string',
            default: 'black'
        },
        alignment: {
            type: 'string',
            default: 'left'
        }
    },
    edit: CGBTestimonialBlock,
    save: function( props ) {
        const { attributes: { icon1Url, icon2Url, icon3Url, text1, text2, text3, priceText, background_color, text_color, alignment }} = props;
        return (
            <div id="caulaincourt-room-types" className="caulaincourt-room-types" style={{
                backgroundColor: background_color,
                color: text_color
            }}>
                <p className={classnames('caulaincourt-room-types-info', alignment)}>
                    <span className="caulaincourt-room-types-icon-wrap">
                        <img src={icon1Url}/>
                    </span>
                    { text1 && !! text1.length && (
                        <RichText.Content
                            tagName="span"
                            className="caulaincourt-room-types-avatar-texts"
                            style={ {
                                textAlign: alignment
                            } }
                            value={ text1 }
                        />
                    )}
                </p>
                <p className={classnames('caulaincourt-room-types-info', alignment)}>
                    <span className="caulaincourt-room-types-icon-wrap">
                        <img src={icon2Url}/>
                    </span>
                    { text2 && !! text2.length && (
                        <RichText.Content
                            tagName="span"
                            className="caulaincourt-room-types-avatar-texts"
                            style={ {
                                textAlign: alignment
                            } }
                            value={ text2 }
                        />
                    )}
                </p>
                <p className={classnames('caulaincourt-room-types-info', alignment)}>
                    <span className="caulaincourt-room-types-icon-wrap">
                        <img src={icon3Url}/>
                    </span>
                    { text3 && !! text3.length && (
                        <RichText.Content
                            tagName="span"
                            className="caulaincourt-room-types-info-description"
                            style={ {
                                textAlign: alignment
                            } }
                            value={ text3 }
                        />
                    )}
                    { priceText && !! priceText.length && (
                        <RichText.Content
                            tagName="p"
                            className="caulaincourt-room-types-info-description"
                            style={ {
                                color: text_color,
                                textAlign: alignment
                            } }
                            value={ priceText }
                        />
                    )}
                </p>
            </div>
        );
    },
} );