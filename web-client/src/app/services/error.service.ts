import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '../models/http-error-response';
import { AppError } from '../models/app-error';
import { DialogService } from '../services/dialog.service';
import { ErrorDialogComponent } from '../components/error-dialog';
import { Navigation } from '../models/navigation';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private dialogService: DialogService) { }

  handlerError(error: any, popUpCloseable: boolean, navigation?: string) {
    if (popUpCloseable === undefined) {
      throw new Error('popUpCloseable is undefinied');
    }
    if (navigation === undefined && popUpCloseable === false) {
      navigation = Navigation.ROOT;
    }

    let e: AppError = new AppError();
    if (error instanceof HttpErrorResponse) {
      e = this.convertHttpErrorInAppError(error, popUpCloseable, navigation);
    } else if (e instanceof AppError) {
      e = error;
      e.navigation = navigation;
      e.popUpCloseable = popUpCloseable;
    } else if (!error) {
      e = this.getDefaultError(popUpCloseable);
    } else { // 'error type is unknown'
      e = this.getDefaultError(popUpCloseable);
    }
    this.dialogService.closeDialog();
    const config = {
      data: e,
      disableClose: true
    };
    this.dialogService.openDialogWithData(ErrorDialogComponent, config);
    console.log('errorHandler()->', error);
  }

  private getDefaultError(popUpCloseable: boolean): AppError {
    return {
      navigation: Navigation.ROOT,
      message: 'no message',
      popUpCloseable: popUpCloseable,
      details: `this error doesn't have details`
    };
  }

  private convertHttpErrorInAppError(httpErrorResponse: HttpErrorResponse, popUpCloseable: boolean, navigation: string) {
    if (!navigation) {
      navigation = Navigation.ROOT;
    }
    if (!httpErrorResponse) {
       throw new Error('httpErrorResponse is undefinied');
    }
    const e: AppError = {
      popUpCloseable: popUpCloseable,
      code: httpErrorResponse.error.code,
      details: httpErrorResponse.url,
      message: httpErrorResponse.error.message,
      name: httpErrorResponse.name,
      navigation: navigation,
      status: httpErrorResponse.status,
      url: httpErrorResponse.url,
      statusText: httpErrorResponse.statusText
    };

    return e;
  }

}
