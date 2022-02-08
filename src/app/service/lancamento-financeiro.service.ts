import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { addDoc, collection, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { collectionData, docData } from 'rxfire/firestore';

@Injectable({
  providedIn: 'root',
})
export class LancamentoFinanceiroService {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private loadingController: LoadingController,
    private router: Router,
    private firestore: Firestore
  ) {}

  public createOne(lancamentoFinanceiroModelParameter: any) {
    const lancamentoFinanceiroModel = collection(this.firestore, "doc_lancamento_financeiro");
    return addDoc(lancamentoFinanceiroModel, lancamentoFinanceiroModelParameter);
  }

  public findAll() {
    const lancamentoFinanceiroModel = collection(this.firestore, "doc_lancamento_financeiro");
    return collectionData(lancamentoFinanceiroModel);
  }

  public findOne(codigo) {
    const lancamentoFinanceiroModel = doc(this.firestore, `doc_lancamento_financeiro/${codigo}`);
    return docData(lancamentoFinanceiroModel, { idField: "codigo" });
  }

  public deleteOne(lancamentoFinanceiroModelParameter: any) {
    const lancamentoFinanceiroModel = doc(this.firestore, `doc_lancamento_financeiro/${lancamentoFinanceiroModelParameter.codigo}`);
    return deleteDoc(lancamentoFinanceiroModel);
  }

  public updateOne(lancamentoFinanceiroModelParameter: any) {
    const lancamentoFinanceiroModel = doc(this.firestore, `doc_lancamento_financeiro/${lancamentoFinanceiroModelParameter.codigo}`);
    return updateDoc(lancamentoFinanceiroModel, {
      data_aquisicao: lancamentoFinanceiroModelParameter.data_aquisicao,
      valor_total_lancamento: lancamentoFinanceiroModelParameter.valor_total_lancamento,
      observacao: lancamentoFinanceiroModelParameter.observacao
    });
  }

  private async apresentarLoading() {
    const loading = await this.loadingController.create({
      message: 'Validando Dados...'
    });
    return await loading.present();
  }

}
