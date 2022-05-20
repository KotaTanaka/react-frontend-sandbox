import styled from '@emotion/styled';
import { Save } from '@material-ui/icons';
import ButtonPrimary from 'src/components/partials/Button/ButtonPrimary';
import FormInput from 'src/components/partials/Form/FormInput';
import type { IRegisterAreaBody } from 'src/interfaces/api/request/Area';
import { baseContainer, flexColumnCenter } from 'src/styles/mixin';

interface Props {
  values: IRegisterAreaBody;
  onChangeAreaKey: (value: string) => void;
  onChangeAreaName: (value: string) => void;
  onSave: () => Promise<void>;
}

/** エリア登録フォーム */
const AreaRegisterForm: React.FC<Props> = (props: Props) => {
  const { values, onChangeAreaKey, onChangeAreaName, onSave } = props;

  return (
    <Container>
      <FormInput
        label="エリアキー"
        help="エリアキーを入力"
        value={values.areaKey}
        onChange={onChangeAreaKey}
      />
      <FormInput
        label="エリア名"
        help="エリア名称を入力"
        value={values.areaName}
        onChange={onChangeAreaName}
      />
      <ButtonPrimary label="登録する" icon={<Save />} onClick={onSave} />
    </Container>
  );
};

// styles
const Container = styled.div`
  ${flexColumnCenter};
  ${baseContainer};
`;

export default AreaRegisterForm;
