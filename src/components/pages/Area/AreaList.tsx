import styled from '@emotion/styled';
import { useCallback, useState } from 'react';
import AreaChip from 'src/components/pages/Area/AreaChip';
import ConfirmDialog from 'src/components/partials/ConfirmDialog';
import EmptyContent from 'src/components/partials/EmptyContent';
import SuccessPopup from 'src/components/partials/SuccessPopup';
import { PAGES } from 'src/constants/page';
import useDeleteArea from 'src/hooks/useDeleteArea';
import { useStore } from 'src/store/Context';

interface Props {
  loading: boolean;
  refetch: () => Promise<void>;
}

/** エリアリスト */
const AreaList: React.FC<Props> = (props: Props) => {
  const { loading, refetch } = props;
  const { areaList } = useStore('area');

  const {
    requestDeleteArea,
    isShowSuccessDeletedPopup,
    closeSuccessDeletedPopup,
  } = useDeleteArea();

  const [targetDeleteAreaKey, setTargetDeleteAreaKey] = useState<string>('');
  // prettier-ignore
  const openDeleteDialog = useCallback((key: string) => setTargetDeleteAreaKey(key), []);
  // prettier-ignore
  const closeDeleteDialog = useCallback(() => setTargetDeleteAreaKey(''), []);

  /** エリア削除 */
  const deleteArea = useCallback(async () => {
    if (!targetDeleteAreaKey) return;
    await requestDeleteArea(targetDeleteAreaKey);
    await refetch();
    closeDeleteDialog();
  }, [targetDeleteAreaKey, requestDeleteArea, refetch, closeDeleteDialog]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (areaList.length === 0) {
    return <EmptyContent link={PAGES.AREAS_REGISTER.path} />;
  }

  return (
    <Container>
      {areaList.map((area) => (
        <AreaChip
          key={area.areaKey}
          area={area}
          onClickDelete={() => openDeleteDialog(area.areaKey)}
        />
      ))}
      <ConfirmDialog
        isOpen={!!targetDeleteAreaKey}
        message="削除しますか？"
        onSubmit={deleteArea}
        onCancel={closeDeleteDialog}
      />
      <SuccessPopup
        open={isShowSuccessDeletedPopup}
        onClose={closeSuccessDeletedPopup}
        message="エリアを削除しました。"
      />
    </Container>
  );
};

// styles
const Container = styled.div``;

export default AreaList;
