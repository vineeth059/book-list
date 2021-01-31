import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { BookStoreEffects } from "./effects";
import * as fromBook from "./reducer";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromBook.bookFeatureKey,
      fromBook.bookFeatureReducer
    ),
    EffectsModule.forFeature([BookStoreEffects]),
  ],
  declarations: [],
})
export class BookStateModule {}
