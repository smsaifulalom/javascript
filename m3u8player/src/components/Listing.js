import React from 'react';
import Icon from './Icon';
import { ButtonGroup, Button, Table } from 'react-bootstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaRegCopy, FaPlayCircle } from 'react-icons/fa';

const Listing = ({ item, channel, setChannel }) => {
  const handlePlay = (currentUrl) => {
    setChannel({
      ...channel,
      url: `https://cors-unlimited.herokuapp.com/${currentUrl}`,
      keyword: '',
    });
  };
  return (
    <Table variant='dark' size='sm' hover striped className='m-0'>
      <thead>
        <tr>
          <td className='p-3'>Title</td>
          <td className='p-3'>URL</td>
        </tr>
      </thead>
      <tbody>
        {item.map((j, id) => {
          const { title, url } = j;
          return (
            <tr key={id}>
              <td className='text-wrap p-3'>{title}</td>
              <td className='text-wrap p-3'>
                <ButtonGroup>
                  <Button
                    variant='dark'
                    className='shadow-lg'
                    onClick={() => handlePlay(url)}
                  >
                    <Icon>
                      <FaPlayCircle />
                    </Icon>
                  </Button>
                  <CopyToClipboard
                    text={url}
                    onCopy={() => alert('URL copied successfully!')}
                  >
                    <Button variant='secondary' className='shadow-lg'>
                      <Icon>
                        <FaRegCopy />
                      </Icon>
                    </Button>
                  </CopyToClipboard>
                </ButtonGroup>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Listing;