/*
 * @Author: changluo
 * @Description:
 * @LastEditors: luc19964 luochang@gopherasset.com
 */
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(map((data) => ({ code: 0, data, describe: '请求成功' })));
  }
}
