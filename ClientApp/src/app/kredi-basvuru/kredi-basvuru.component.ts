import { Component } from '@angular/core';

@Component({
  selector: 'app-kredi-basvuru',
  templateUrl: './kredi-basvuru.component.html',
  styleUrls: ['./kredi-basvuru.component.css']
})
export class KrediBasvuruComponent {
  krediTutari: number | undefined;
  aylikGelir: number | undefined;

  constructor() { }

  onSubmit() {

    console.log('Kredi Başvurusu Gönderildi:');
    console.log('Arz Edilen Kredi Tutarı:', this.krediTutari);
    console.log('Aylık Gelir:', this.aylikGelir);
  }
}
