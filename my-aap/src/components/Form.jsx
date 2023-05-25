import React from 'react'
import { useForm } from "react-hook-form";
import 'leaflet/dist/leaflet.css';
import {
  MapContainer, Marker, Popup, TileLayer, Tooltip, CircleMarker, Polygon
} from 'react-leaflet';
import axios from 'axios';


const colorOptions={color:'blue'}
const centerPolygon=[
  [
    [58.578834, 49.637945],
    [58.614249, 49.656235],
    [58.615062, 49.679585],
    [58.585744, 49.681660]
  ]
]
const center=[58.594166, 49.655874]

const Form = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
      const onSubmit = (data) => {
        axios.post('https://645fde3cca2d89f7e74f6f9a.mockapi.io/Form', data)
        alert('Заявка отправлена')
        console.log(data)
      }
    
      console.log(watch("example")); 

      return (
        <div>
         <form id='form' onSubmit={handleSubmit(onSubmit)}>
          <h1>Форма для обратной связи</h1>
          <div className='input-group mb-3'> 
            <input
            {...register('lastName',{
              required: true, 
                maxLength:50,
                pattern: /^[А-Яа-я]+$/i,
            })}
            type="text"
            className='form-control'
            placeholder='Фамилия'/>
          </div>
              {errors?.lastName?.type === 'required'&&(
                <div className='alert alert-danger' role='alert'>
                  Поле обязательно для заполнения
                </div>
              )}
              {errors?.lastName?.type === 'maxLength'&&(
                <div className='alert alert-danger' role='alert'>
                  Максимальное количество символов 50
                </div>
              )}
              {errors?.lastName?.type === 'pattern'&&(
                <div className='alert alert-danger' role='alert'>
                  Недопустимые символы (Используйте кириллицу)
                </div>
              )}
              <div className='input-group mb-3'> 
            <input
            {...register('firstName',{
              required: true, 
                maxLength:50,
                pattern: /^[А-Яа-я]+$/i,
            })}
            type="text"
            className='form-control'
            placeholder='Имя'/>
          </div>
              {errors?.firstName?.type === 'required'&&(
                <div className='alert alert-danger' role='alert'>
                  Поле обязательно для заполнения
                </div>
              )}
              {errors?.firstName?.type === 'maxLength'&&(
                <div className='alert alert-danger' role='alert'>
                  Максимальное количество символов 50
                </div>
              )}
              {errors?.firstName?.type === 'pattern'&&(
                <div className='alert alert-danger' role='alert'>
                  Недопустимые символы (Используйте кириллицу)
                </div>
              )}
              <div className='input-group mb-3'> 
            <input
            {...register('middleName',{
              required: true, 
                maxLength:50,
                pattern: /^[А-Яа-я]+$/i,
            })}
            type="text"
            className='form-control'
            placeholder='Отчество'/>
          </div>
              {errors?.middleName?.type === 'required'&&(
                <div className='alert alert-danger' role='alert'>
                  Поле обязательно для заполнения
                </div>
              )}
              {errors?.middleName?.type === 'maxLength'&&(
                <div className='alert alert-danger' role='alert'>
                  Максимальное количество символов 50
                </div>
              )}
              {errors?.middleName?.type === 'pattern'&&(
                <div className='alert alert-danger' role='alert'>
                  Недопустимые символы (Используйте кириллицу)
                </div>
              )}
              <div className='input-group mb-3'> 
            <input
            {...register('email',{
              required: true, 
              pattern: /^[A-Za-z@._0-9]+$/i,
            })}
            type="text"
            className='form-control'
            placeholder='Email'/>
          </div>
              {errors?.email?.type === 'required'&&(
                <div className='alert alert-danger' role='alert'>
                  Поле обязательно для заполнения
                </div>
              )}
              {errors?.email?.type === 'pattern'&&(
                <div className='alert alert-danger' role='alert'>
                  Недопустимые символы 
                </div>
              )}
              <div className='input-group mb-3'> 
            <input
            {...register('number',{
              required: true, 
              maxLength:12,
              pattern: /^[0-9+]+$/i,
            })}
            type="number"
            className='form-control'
            placeholder='Телефон'/>
          </div>
              {errors?.number?.type === 'required'&&(
                <div className='alert alert-danger' role='alert'>
                  Поле обязательно для заполнения
                </div>
              )}
              {errors?.number?.type === 'maxLength'&&(
                <div className='alert alert-danger' role='alert'>
                  Максимальное количество символов 12
                </div>
              )}
              {errors?.number?.type === 'pattern'&&(
                <div className='alert alert-danger' role='alert'>
                  Недопустимые символы 
                </div>
              )}
              <div>
              <input className='btn btn-outline-primary' type="submit" />
              </div>
        </form>
        <br></br>
        <MapContainer
          zoom={10}
          center={center}
          style={{
            width: '100vw',
            height: '100vh',
          }}
        > 
                <TileLayer
                  url='https://645fde3cca2d89f7e74f6f9a.mockapi.io/Form'
                  attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                />
                <CircleMarker 
                center={center}
                pathOptions={{
                  color:'red'
                }}
                radius={10}
                />

                <Marker position={center}>
                 <Popup>
                    Мы находимся тут!
                  </Popup> 
                  <Tooltip>
                    Мы находимся тут!
                  </Tooltip>
                </Marker>

                  <Polygon positions={centerPolygon} pathOptions={colorOptions}/>

        </MapContainer>
        </div>
      );
    }
  

export default Form