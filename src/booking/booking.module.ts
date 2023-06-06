import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { Booking } from './entities/booking.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingInspections } from 'src/typeorm/Inspections';

@Module({
  imports:[
    TypeOrmModule.forFeature([Booking,],'booking'),
    TypeOrmModule.forFeature([BookingInspections,],'bookingInspections')
  ],
  controllers: [BookingController],
  providers: [BookingService]
})
export class BookingModule {}