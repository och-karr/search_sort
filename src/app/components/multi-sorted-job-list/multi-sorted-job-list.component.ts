import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, combineLatest, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { JobModel } from '../../models/job.model';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-multi-sorted-job-list',
  styleUrls: ['./multi-sorted-job-list.component.scss'],
  templateUrl: './multi-sorted-job-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiSortedJobListComponent {
  readonly directions: Observable<Array<string>> = of(['asc', 'desc']);
  readonly properties: Observable<Array<string>> = of(['title', 'description']);

  readonly sortForm: FormGroup = new FormGroup({
    direction: new FormControl(),
    property: new FormControl()
  });

  readonly list$: Observable<JobModel[]> = combineLatest([
    this._jobService.getAll(),
    this.sortForm.controls['direction'].valueChanges,
    this.sortForm.controls['property'].valueChanges
  ]).pipe(
    map(([products, direction, property]: [JobModel[], string, string]) => {
      // console.log(sortForm)
      return products.sort((a, b) => {
        if (a.title < b.title) {
          return direction === 'desc' ? 1 : -1;
        }
        if (a.title > b.title) {
          return direction === 'desc' ? -1 : 1;
        }
        return 0;
      })
    })
  )

  constructor(private _jobService: JobService) {
  }
}
