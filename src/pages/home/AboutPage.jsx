// Importing React, Material UI components, and styled-components
import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import styled from 'styled-components';

// Styled Components

const SectionTitle = styled(Typography)`
    && {
        text-align: center;
        color: var(--secondary-color);
        font-size: 32px;
        font-weight: bold;
        width: auto;
        margin: 0 auto 56px;
        padding: 24px;
        text-transform: uppercase;
    }
`;

const StyledList = styled(List)`
    padding: 0;
`;

const StyledListItem = styled(ListItem)`
    display: list-item;
    list-style-type: disc;
    margin-left: 20px;
    padding: 0;
`;

const SubSectionTitle = styled(Typography)`
    color: #006699;
    font-size: 32px;
    font-weight: bold;
    margin-top: 20px;
`;

const InstructionContainer = styled(Container)`
    padding: 20px;
`;

const ReturnPolicyContainer = styled(Container)`
    margin-top: 20px;
    padding: 20px;
`;

// Main Component
const PurchaseGuide = () => {
    return (
        <InstructionContainer maxWidth="md">
            <SectionTitle>HƯỚNG DẪN MUA HÀNG</SectionTitle>

            {/* Step 1 */}
            <SubSectionTitle>Bước 1: Đăng nhập/Đăng ký tài khoản</SubSectionTitle>
            <StyledList>
                <StyledListItem>
                    <ListItemText primary="Đăng nhập bằng tài khoản và mật khẩu đã đăng ký trước đó..." />
                </StyledListItem>
                <StyledListItem>
                    <ListItemText primary="Sau khi điền đầy đủ thông tin yêu cầu, quý khách có thể bấm vào chữ 'Đăng ký'..." />
                </StyledListItem>
            </StyledList>

            {/* Step 2 */}
            <SubSectionTitle>Bước 2: Tìm kiếm/lựa chọn sản phẩm</SubSectionTitle>
            <StyledList>
                <StyledListItem>
                    <ListItemText primary="Gõ tên sản phẩm vào thanh tìm kiếm." />
                </StyledListItem>
                <StyledListItem>
                    <ListItemText primary="Tìm theo danh mục sản phẩm." />
                </StyledListItem>
                <StyledListItem>
                    <ListItemText primary="Tìm theo các sản phẩm hot/bán chạy." />
                </StyledListItem>
            </StyledList>

            {/* Step 3 */}
            <SubSectionTitle>Bước 3: Thêm sản phẩm vào giỏ hàng</SubSectionTitle>
            <StyledList>
                <StyledListItem>
                    <ListItemText primary="Khi đã tìm được sản phẩm mong muốn, quý khách bấm vào hình..." />
                </StyledListItem>
                <StyledListItem>
                    <ListItemText primary="Kiểm tra thông tin sản phẩm: giá/thông tin khuyến mãi/màu sắc..." />
                </StyledListItem>
                <StyledListItem>
                    <ListItemText primary="Thêm sản phẩm vào giỏ hàng hoặc chọn mua ngay." />
                </StyledListItem>
            </StyledList>

            {/* Step 4 */}
            <SubSectionTitle>Bước 4: Kiểm tra giỏ hàng và đặt hàng</SubSectionTitle>
            <StyledList>
                <StyledListItem>
                    <ListItemText primary="Sau khi đã lựa chọn xong sản phẩm, kiểm tra lại số lượng..." />
                </StyledListItem>
            </StyledList>

            {/* Step 5 */}
            <SubSectionTitle>Bước 5: Chọn hình thức giao hàng, phương thức thanh toán</SubSectionTitle>
            <StyledList>
                <StyledListItem>
                    <ListItemText primary="Chọn hình thức giao hàng: nhập địa chỉ giao hàng mong muốn..." />
                </StyledListItem>
                <StyledListItem>
                    <ListItemText primary="Chọn 01 trong các hình thức thanh toán như: Thanh toán qua cổng thanh toán..." />
                </StyledListItem>
            </StyledList>

            {/* Step 6 */}
            <SubSectionTitle>Bước 6: Theo dõi tình trạng đơn hàng</SubSectionTitle>
            <StyledList>
                <StyledListItem>
                    <ListItemText primary="Sau khi đặt hàng thành công, quý khách có thể theo dõi tiến trình xử lý đơn hàng..." />
                </StyledListItem>
            </StyledList>

            {/* Return Policy Section */}
            <ReturnPolicyContainer maxWidth="md">
                <SectionTitle>CHÍNH SÁCH ĐỔI TRẢ</SectionTitle>

                {/* 1. Quy định đổi/trả hàng */}
                <SubSectionTitle>1. Quy định đổi/trả hàng</SubSectionTitle>
                <StyledList>
                    <StyledListItem>
                        <ListItemText primary="Quý khách được đổi trả sản phẩm mới cùng loại..." />
                    </StyledListItem>
                    <StyledListItem>
                        <ListItemText primary="Sản phẩm có hàng lỗi hoặc hư hại do vận chuyển..." />
                    </StyledListItem>
                    <StyledListItem>
                        <ListItemText primary="Sản phẩm không đúng thông tin đặt hàng..." />
                    </StyledListItem>
                </StyledList>

                {/* 2. Chính sách hoàn tiền */}
                <SubSectionTitle>2. Chính sách hoàn tiền</SubSectionTitle>
                <StyledList>
                    <StyledListItem>
                        <ListItemText primary="Đối với trường hợp thanh toán trước, khách hàng sẽ được hoàn tiền..." />
                    </StyledListItem>
                </StyledList>

                {/* 3. Phương thức đổi trả sản phẩm */}
                <SubSectionTitle>3. Phương thức đổi trả sản phẩm</SubSectionTitle>
                <StyledList>
                    <StyledListItem>
                        <ListItemText primary="Liên hệ qua hotline." />
                    </StyledListItem>
                    <StyledListItem>
                        <ListItemText primary="Cung cấp đầy đủ minh chứng." />
                    </StyledListItem>
                    <StyledListItem>
                        <ListItemText primary="UEH Station sẽ tiếp nhận và xử lý trong vòng 5-7 ngày." />
                    </StyledListItem>
                </StyledList>
            </ReturnPolicyContainer>
        </InstructionContainer>
    );
};

export default PurchaseGuide;
