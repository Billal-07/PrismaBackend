import _ from 'lodash';
import BaseRepository from './baseRepository';
import { AnyRecord, ModelStructure, ModelTypes, ModelScalarFields, MODELS_NAME } from './prisma-repo';

// This type will be used if you want to extends the functions in Doctor Class

/* eslint-disable @typescript-eslint/no-unused-vars */
type Where = ModelTypes[typeof MODELS_NAME.DOCTOR]['Where'];
type Select = ModelTypes[typeof MODELS_NAME.DOCTOR]['Select'];
type Include = ModelTypes[typeof MODELS_NAME.DOCTOR]['Include'];
type Create = ModelTypes[typeof MODELS_NAME.DOCTOR]['Create'];
type Update = ModelTypes[typeof MODELS_NAME.DOCTOR]['Update'];
type Cursor = ModelTypes[typeof MODELS_NAME.DOCTOR]['Cursor'];
type Order = ModelTypes[typeof MODELS_NAME.DOCTOR]['Order'];
type Delegate = ModelTypes[typeof MODELS_NAME.DOCTOR]['Delegate'];
type GroupBy = ModelTypes[typeof MODELS_NAME.DOCTOR]['GroupBy'];
type Scalar = ModelScalarFields<typeof MODELS_NAME.DOCTOR>;
type Model = ModelStructure[typeof MODELS_NAME.DOCTOR];
/*  eslint-enable @typescript-eslint/no-unused-vars */


class Doctor extends BaseRepository(MODELS_NAME.DOCTOR) {
}

export default Doctor
