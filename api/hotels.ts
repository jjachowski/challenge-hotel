import axios, { AxiosResponse } from 'axios';
import { Hotel } from '../types/hotel';
import { HotelRooms } from '../types/hotelRooms';

export const getHotels = async (): Promise<AxiosResponse<Hotel[]>> =>
  axios.get('https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG');

export const getHotelRooms = async (
  id: string
): Promise<AxiosResponse<HotelRooms>> =>
  axios.get('https://obmng.dbm.guestline.net/api/roomRates/OBMNG/' + id);
