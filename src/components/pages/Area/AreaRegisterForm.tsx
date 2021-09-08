import styled from '@emotion/styled';
import { Save } from '@material-ui/icons';
import ButtonPrimary from 'src/components/partials/Button/ButtonPrimary';
import FormInput from 'src/components/partials/Form/FormInput';
import { IRegisterAreaBody } from 'src/interfaces/api/request/Area';
import { baseContainer, flexColumnCenter } from 'src/styles/mixin';

interface Props {
  params: IRegisterAreaBody;
  onChangeAreaKey: (value: string) => void;
  onChangeAreaName: (value: string) => void;
  onSave: () => Promise<void>;
}

/** エリア登録フォーム */
const AreaRegisterForm: React.FC<Props> = (props: Props) => {
  const { params, onChangeAreaKey, onChangeAreaName, onSave } = props;

  return (
    <Container>
      <FormInput
        label="エリアキー"
        help="エリアキーを入力"
        value={params.areaKey}
        onChange={onChangeAreaKey}
      />
      <FormInput
        label="エリア名"
        help="エリア名称を入力"
        value={params.areaName}
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
