import React, { PureComponent } from 'react';
import css from './ImageGalleryItem.module.css';
import { ModalWindow } from '../Modal/Modal';

class ImageGalleryItem extends PureComponent {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  render() {
    const { isModalOpen } = this.state;
    const { tags, image, largeImageURL } = this.props;
    return (
      <>
        <img
          className={css.image}
          src={image}
          alt={tags}
          onClick={this.toggleModal}
          loading="lazy"
        />
        <ModalWindow
          isModalOpen={isModalOpen}
          closeModal={this.toggleModal}
          largeImageURL={largeImageURL}
          tags={tags}
        />
      </>
    );
  }
}

export default ImageGalleryItem;
