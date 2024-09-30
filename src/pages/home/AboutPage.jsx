import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Typography, List, ListItem } from '@mui/material';
import styled from 'styled-components';

// Styled Components
const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    margin: 20px 0;

    .about-title {
        text-align: center;
        color: var(--secondary-color);
        font-size: 40px;
        font-weight: bold;
        width: auto;
        margin: 0 auto 15px;
        text-transform: uppercase;
        font-family: 'Anton SC';
    }

    .about-subtitle {
        font-size: 26px;
        font-weight: 600;
        margin-top: 20px;
        margin-bottom: 4px;
        color: #005f69;
        font-family: 'Roboto';
    }
    .about-subtitle-content {
        font-size: 26px;
        font-family: 'Roboto';
        align-items: justify;
    }

    .about-list {
        padding: 0;
    }

    .about-content {
        display: list-item;
        list-style-type: disc;
        font-size: 26px;
        font-family: 'Roboto';
        align-items: justify;
        margin-left: 60px;
    }
`;

const StyledDivier = styled.div`
    width: 60%;
    height: 3px;
    background-color: #f26f33;
    margin: 130px auto 41px auto;
`;

// Main Component
const PurchaseGuide = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <>
            <StyledContainer>
                <Typography id="huong-dan-mua-hang" className="about-title">
                    HƯỚNG DẪN MUA HÀNG
                </Typography>

                <Container>
                    {/* Bước 1 */}
                    <Typography className="about-subtitle">Bước 1: Đăng nhập/Đăng ký tài khoản</Typography>
                    <List className="about-list">
                        <ListItem className="about-content">
                            Đăng nhập bằng tài khoản và mật khẩu đã đăng ký trước đó. Trong trường hợp chưa có tài khoản, Quý khách có thể
                            chọn “Đăng ký” để đăng ký tài khoản tại UEH Stationery Website.
                        </ListItem>
                        <ListItem className="about-content">
                            Sau khi đã kê khai đầy đủ thông tin yêu cầu, Quý khách có thể bấm vào chữ “Đăng ký” và “Xác nhận” để hoàn tất
                            quá trình đăng ký.
                        </ListItem>
                    </List>

                    {/* Step 2 */}
                    <Typography className="about-subtitle">Bước 2: Tìm kiếm/lựa chọn sản phẩm</Typography>
                    <Typography className="about-subtitle-content">Quý khách có thể tìm sản phẩm theo 3 cách:</Typography>

                    <List className="about-list">
                        <ListItem className="about-content">Gõ tên sản phẩm vào thanh tìm kiếm.</ListItem>
                        <ListItem className="about-content">Tìm theo danh mục sản phẩm.</ListItem>
                        <ListItem className="about-content">Tìm theo các sản phẩm hot/bán chạy.</ListItem>
                    </List>

                    {/* Step 3 */}
                    <Typography className="about-subtitle">Bước 3: Thanh toán</Typography>
                    <Typography className="about-subtitle-content">
                        Khi đã tìm được sản phẩm mong muốn, Quý khách bấm vào hình hoặc tên sản phẩm để vào được trang thông tin chi tiết
                        của sản phẩm, sau đó:
                    </Typography>
                    <List className="about-list">
                        <ListItem className="about-content">Kiểm tra thông tin sản phẩm: giá/ thông tin khuyến mãi/ màu sắc.</ListItem>
                        <ListItem className="about-content">Chọn số lượng muốn mua.</ListItem>
                        <ListItem className="about-content">Thêm sản phẩm vào giỏ hàng hoặc chọn mua ngay.</ListItem>
                    </List>

                    {/* Step 4 */}
                    <Typography className="about-subtitle">Bước 4: Kiểm tra giỏ hàng và đặt hàng</Typography>
                    <List className="about-list">
                        <ListItem className="about-content">
                            Sau khi đã lựa chọn xong sản phẩm, Quý khách kiểm tra lại sản phẩm và số lượng có nhu cầu để điều chỉnh cho phù
                            hợp bằng cách: Bấm “Xem Giỏ hàng” hoặc “Thanh toán” để bắt đầu đặt hàng.
                        </ListItem>
                    </List>

                    {/* Step 5 */}
                    <Typography className="about-subtitle">Bước 5: Chọn hình thức giao hàng, phương thức thanh toán</Typography>
                    <List className="about-list">
                        <ListItem className="about-content">
                            Chọn hình thức giao hàng: nhập địa chỉ giao hàng mong muốn, chọn hình thức giao nhanh hay giao tiết kiệm.
                        </ListItem>
                        <ListItem className="about-content">
                            Chọn hình thức thanh toán: Chọn 01 trong các hình thức thanh toán như: Thanh toán qua Cổng thanh toán payment
                            (Momo, ZaloPay và ngân hàng trực tuyến).
                        </ListItem>
                        <ListItem className="about-content">
                            Sau khi hoàn tất quá trình chọn phương thức thanh toán, vui lòng kiểm tra lại các thông tin sau: địa chỉ nhận
                            hàng, điện thoại, email, giá khuyến mãi, tổng tiền.
                        </ListItem>
                        <ListItem className="about-content">
                            Nếu các thông tin trên đã chính xác, Quý khách vui lòng bấm “Đặt mua”, hệ thống sẽ bắt đầu tiến hành tạo đơn
                            hàng dựa trên các thông tin Quý khách đã đăng ký.
                        </ListItem>
                    </List>

                    {/* Step 6 */}
                    <Typography className="about-subtitle">Bước 6: Theo dõi tình trạng đơn hàng</Typography>
                    <List className="about-list">
                        <ListItem className="about-content">
                            Sau khi đặt hàng thành công, Quý khách có thể theo dõi tiến trình xử lý của đơn hàng ở phần đơn hàng hoặc trạng
                            thái được cập nhật qua email.
                        </ListItem>
                    </List>
                </Container>
            </StyledContainer>

            <StyledDivier />

            {/* CHÍNH SÁCH ĐỔI TRẢ */}
            <StyledContainer>
                <Typography id="chinh-sach-doi-tra" className="about-title">
                    CHÍNH SÁCH ĐỔI TRẢ
                </Typography>

                <Container>
                    {/* Bước 1 */}
                    <Typography className="about-subtitle">1. Quy định đổi/trả hàng:</Typography>
                    <Typography className="about-subtitle-content">
                        Quý khách được đổi/trả sản phẩm mới cùng loại nếu sản phẩm gặp sự cố do lỗi kỹ thuật của nhà sản xuất hoặc đặt lộn
                        kích thước, màu sắc. Đối với trường hợp đổi hàng chỉ được một lần duy nhất cho một đơn hàng, không đổi sang sản phẩm
                        khác, hàng sẽ được đổi trong 5 - 7 ngày. Sản phẩm chỉ được đổi/trả sau khi tuân thủ theo các điều kiện sau đây
                    </Typography>
                    <List className="about-list">
                        <ListItem className="about-content">Hàng hóa được xác định nguồn gốc mua của công ty chúng tôi.</ListItem>
                        <ListItem className="about-content">Trường hợp nhận hàng sau tối đa 07 ngày và có video quay minh chứng.</ListItem>
                        <ListItem className="about-content">
                            Hàng hóa nhận lại không bị lỗi hình thức (trầy, xước, móp méo, vỡ…) hoặc bị hư hại trong quá trình vận chuyển,
                            không sử dụng được ngay khi được giao.
                        </ListItem>
                        <ListItem className="about-content">Sản phẩm giao không đúng theo đơn đặt hàng (màu, size,…).</ListItem>
                        <ListItem className="about-content">
                            Hàng hóa nhận lại phải còn đầy đủ linh phụ kiện kèm theo, tặng phẩm (nếu có) , các chương trình khuyến mãi, các
                            chứng từ kèm theo như (Chứng từ mua hàng, chứng từ thanh toán, hóa đơn VAT,…).
                        </ListItem>
                    </List>

                    {/* Step 2 */}
                    <Typography className="about-subtitle">2. Chính sách hoàn tiền</Typography>
                    <List className="about-list">
                        <ListItem className="about-content">
                            Đối với trường hợp thanh toán trước, khách hàng sẽ được hoàn tiền khi hàng nhận bị lỗi do sản xuất và khách hàng
                            trả hàng không có nhu cầu đổi sang sản phẩm khác nhưng vẫn tính phí ship liên quan.
                        </ListItem>
                        <ListItem className="about-content">
                            hời gian hoàn tiền: từ 07 đến 15 ngày kể từ khi shop nhận được hàng trả từ khách hàng. Tiền được hoàn vào tài
                            khoản cá nhân của khách hàng cung cấp.
                        </ListItem>
                    </List>

                    {/* Step 3 */}
                    <Typography className="about-subtitle">Bước 3: Thanh toán</Typography>
                    <List className="about-list">
                        <ListItem className="about-content">Liên hệ qua hotline.</ListItem>
                        <ListItem className="about-content">Cung cấp đầy đủ minh chứng.</ListItem>
                        <ListItem className="about-content">UEH Station sẽ tiếp nhận và xử lý trong vòng 5 đến 7 ngày.</ListItem>
                    </List>
                </Container>
            </StyledContainer>

            <StyledDivier />

            {/*  CHÍNH SÁCH BẢO MẬT */}
            <StyledContainer>
                <Typography id="chinh-sach-bao-mat" className="about-title">
                    CHÍNH SÁCH BẢO MẬT
                </Typography>

                <Container>
                    {/* Bước 1 */}
                    <Typography className="about-subtitle">1. Thông tin khách hàng đối với bên thứ ba</Typography>
                    <Typography className="about-subtitle-content">
                        UEH Stationery cam kết không cung cấp thông tin khách hàng với bất kì bên thứ ba nào, trừ những trường hợp sau:
                    </Typography>
                    <List className="about-list">
                        <ListItem className="about-content">
                            Các đối tác là bên cung cấp dịch vụ liên quan đến thực hiện đơn hàng và chỉ giới hạn trong phạm vi thông tin cần
                            thiết cũng như áp dụng các quy định đảm bảo an ninh, bảo mật các thông tin cá nhân.
                        </ListItem>
                        <ListItem className="about-content">
                            UEH Stationery có thể sử dụng dịch vụ từ một nhà cung cấp dịch vụ là bên thứ ba để thực hiện một số hoạt động
                            liên quan đến trang thương mại điện tử. Khi đó bên thứ ba này có thể truy cập hoặc xử lý các thông tin cá nhân
                            trong quá trình cung cấp các dịch vụ đó. UEH Stationery yêu cầu các bên thứ ba này tuân thủ mọi luật lệ về bảo
                            vệ thông tin cá nhân liên quan và các yêu cầu về an ninh liên quan đến thông tin cá nhân.
                        </ListItem>
                        <ListItem className="about-content">
                            Yêu cầu pháp lý: UEH Stationery có thể tiết lộ các thông tin cá nhân nếu điều đó do luật pháp yêu cầu, tuân thủ
                            các quy trình pháp lý.
                        </ListItem>
                    </List>

                    {/* Step 2 */}
                    <Typography className="about-subtitle">2. An toàn dữ liệu</Typography>
                    <Typography className="about-subtitle-content">
                        UEH Stationery luôn nỗ lực để giữ an toàn thông tin cá nhân của khách hàng bằng nhiều biện pháp an toàn, bao gồm:
                    </Typography>
                    <List className="about-list">
                        <ListItem className="about-content">
                            Bảo đảm an toàn trong môi trường vận hành: UEH Stationery lưu trữ thông tin cá nhân khách hàng trong môi trường
                            vận hành an toàn và chỉ có nhân viên, đại diện và nhà cung cấp dịch vụ có thể truy cập trên cơ sở cần phải biết.
                            UEH Stationery tuân theo các quy định của pháp luật trong việc bảo mật thông tin cá nhân khách hàng.
                        </ListItem>
                        <ListItem className="about-content">
                            Trong trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn đến mất mát dữ liệu cá nhân khách hàng,
                            UEH Stationery sẽ có trách nhiệm thông báo vụ việc cho cơ quan chức năng để điều tra xử lý kịp thời và thông báo
                            cho khách hàng được biết.
                        </ListItem>
                        <ListItem className="about-content">Các thông tin thanh toán: được bảo mật theo tiêu chuẩn ngành.</ListItem>
                    </List>

                    {/* Step 3 */}
                    <Typography className="about-subtitle">3. Quyền lợi của khách hàng đối với thông tin cá nhân</Typography>
                    <List className="about-list">
                        <ListItem className="about-content">
                            Khách hàng có quyền cung cấp thông tin cá nhân cho UEH Stationery và có thể thay đổi quyết định đó vào bất cứ
                            lúc nào.
                        </ListItem>
                        <ListItem className="about-content">
                            Khách hàng có quyền tự kiểm tra, cập nhật, điều chỉnh thông tin cá nhân của mình bằng cách đăng nhập vào tài
                            khoản và chỉnh sửa thông tin cá nhân hoặc yêu cầu UEH Stationery thực hiện việc này.
                        </ListItem>
                    </List>

                    {/* Step 4 */}
                    <Typography className="about-subtitle">4. Yêu cầu xóa bỏ thông tin cá nhân</Typography>
                    <List className="about-list">
                        <ListItem className="about-content">
                            Khách hàng có quyền yêu cầu xóa bỏ hoàn toàn các thông tin cá nhân lưu trữ trên hệ thống của UEH Community Shop
                            bất cứ khi nào.
                        </ListItem>
                        <ListItem className="about-content">
                            Khách hàng gửi thư điện tử về địa chỉ shop@ueh.edu.vn để yêu cầu xóa bỏ thông tin cá nhân hoàn toàn khỏi hệ
                            thống
                        </ListItem>
                    </List>

                    {/* Step 5 */}
                    <Typography className="about-subtitle">5. THÔNG TIN LIÊN HỆ</Typography>
                    <List className="about-list">
                        <ListItem className="about-content">
                            Nếu bạn có câu hỏi hoặc bất kỳ thắc mắc nào về Chính sách bảo mật của UEH Stationery Website, xin vui lòng liên
                            hệ qua hotline.
                        </ListItem>
                    </List>
                </Container>
            </StyledContainer>
        </>
    );
};

export default PurchaseGuide;
